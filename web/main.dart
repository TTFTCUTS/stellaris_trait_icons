import 'dart:html';
import 'dart:collection';
import 'dart:async';
import 'dart:math';

late CanvasElement inputCanvas;
late CanvasRenderingContext2D inputCtx;

late CanvasElement outputCanvas;
late CanvasRenderingContext2D ctx;

const int iconsize = 29;

late Map<String, ImageElement> images;
Map<String, List<double>> tints = {
	"positive" : [0.0, 33/255, 29/255],
	"negative" : [33/255, 3/255, 0.0],
	"super" : [0.0, 42/255, 43/255],
	"overtuned" : [ 21/255, 15/255, 3/255 ],
	"hive" : [235/255, 221/255, 190/255],
	"machine" : [0/255, 39/255, 40/255],
	"megacorp" : [13/255, 13/255, 5/255],
	"psi" : [14/255, 5/255, 23/255],
	"physics" : [0.0, 21/255, 35/255],
	"society" : [8/255, 27/255, 13/255],
	"engineering" : [35/255, 27/255, 0.0],
	"bugyellow" : [38/255, 30/255, 5/255],
	"bugblue" : [0/255, 23/255, 28/255],
};
typedef List<double> IconExtractor(ImageData input, HashMap<String,String> settings);
Map<String, IconExtractor> extractors = {
	"alpha" : basicIconExtractor,
	"black" : basicIconExtractor,
	"white" : basicIconExtractor,
	"positive" : existingIconExtractor,
	"negative" : existingIconExtractor,
	"super" : existingIconExtractor,
	"overtuned" : existingIconExtractor,
	"hive" : existingIconExtractor,
	"machine" : existingIconExtractor,
	"megacorp" : existingIconExtractor,
	"psi" : existingIconExtractor,
	"physics" : existingIconExtractor,
	"society" : existingIconExtractor,
	"engineering" : existingIconExtractor,
	"bugyellow" : existingIconExtractor,
	"bugblue" : existingIconExtractor,
};

void main() {
	FileUploadInputElement upload = (querySelector("#file")! as FileUploadInputElement);

	upload
		..addEventListener("click", (e) => upload.value = null)
		..addEventListener("change", loadInputImage);

	inputCanvas = (querySelector("#inputcanvas")! as CanvasElement);
	inputCanvas..width=iconsize..height=iconsize;
	inputCtx = inputCanvas.context2D;

	outputCanvas = (querySelector("#outputcanvas")! as CanvasElement);
	outputCanvas..width=iconsize..height=iconsize;
	ctx = outputCanvas.context2D;

	images = new HashMap<String, ImageElement>();
	List<Future> futures = [];

	ElementList<ImageElement> imageElements = querySelectorAll("img");

	for (ImageElement img in imageElements) {
		String name = img.src!.split("/").last.split(".").first;

		images[name] = img;

		futures.add(img.onLoad.first);
	}

	ElementList<InputElement> radios = querySelectorAll("input[type='radio']");

	for (InputElement e in radios) {
		e.addEventListener("click", selectRadioButton);
	}

	Future.wait(futures).then((_) => makeIcon());
}

void selectRadioButton(Event e) {
	makeIcon();
}

void loadInputImage(Event e) {
	FileReader reader = new FileReader();

	reader.onLoad.listen((ProgressEvent fileevent) {
		print("test?");

	//reader.addEventListener("load", (fileevent) {
		ImageElement img = new ImageElement();

		img.addEventListener("load", (imgevent) {
			inputCanvas
				..width = img.width
				..height = img.height;
			inputCtx.drawImage(img, 0,0);

			makeIcon();
		});

		img.src = reader.result! as String;//fileevent.target!.result;
	});

	reader.readAsDataUrl((e.target as FileUploadInputElement).files![0]);
}

HashMap<String, String> readSettings() {
	HashMap<String,String> settings = new HashMap<String,String>();

	ElementList<InputElement> radios = querySelectorAll("input[type='radio']");

	for (InputElement e in radios) {
		if (e is RadioButtonInputElement && e.checked!) {
			settings[e.name!] = e.value!;
		}
	}

	return settings;
}

void clear() {
	ctx.clearRect(0,0,iconsize,iconsize);
}

void makeIcon() {
	HashMap<String,String> settings = readSettings();

	// get input imagedata, process
	ImageData inputImageData = inputCtx.getImageData(0,0,iconsize,iconsize);

	List<double> inputData = getInputData(inputImageData, settings);

	// get mask and bg images
	ImageElement mask = images["mask_${settings["outputtype"]}"]!;
	ImageElement border = images["border_${settings["outputtype"]}"]!;
	ImageElement background = images["icon_${settings["outputcolour"]}"]!;

	// get mask data
	clear();
	ctx.drawImage(mask, 0,0);
	ImageData maskData = ctx.getImageData(0,0,iconsize,iconsize);

	clear();
	ctx.drawImage(border, 0,0);
	ImageData borderData = ctx.getImageData(0,0,iconsize,iconsize);

	// get background data
	clear();
	ctx.drawImage(background, 0,0);
	ImageData backgroundData = ctx.getImageData(0,0,iconsize,iconsize);

	clear();
	ImageData data = ctx.getImageData(0,0,iconsize,iconsize);

	var fill = tints[settings["outputcolour"]]!;

	var hasborder = settings["border"] == "true";

	for (int x = 0; x<iconsize; x++) {
		for (int y = 0; y<iconsize; y++) {
			int index = y*iconsize + x;
			int dataindex = index * 4;

			double mix = inputData[index];

			if (hasborder) {
				mix *= borderData.data[dataindex] / 255;
			}

			data.data[dataindex] = (fill[0] * 255 * mix + backgroundData.data[dataindex] * (1-mix)).floor();
			data.data[dataindex+1] = (fill[1] * 255 * mix + backgroundData.data[dataindex+1] * (1-mix)).floor();
			data.data[dataindex+2] = (fill[2] * 255 * mix + backgroundData.data[dataindex+2] * (1-mix)).floor();
			data.data[dataindex+3] = maskData.data[dataindex];
		}
	}

	ctx.putImageData(data,0,0);
}

List<double> getInputData(ImageData input, HashMap<String,String> settings) {
	return extractors[settings["inputcolour"]]!(input, settings);
}

List<double> basicIconExtractor(ImageData input, HashMap<String,String> settings) {
	List<double> idata = new List<double>.filled(iconsize*iconsize, 0.0);

	String inputColour = settings["inputcolour"]!;

	for (int x=0; x<iconsize; x++) {
		for (int y=0; y<iconsize; y++) {
			int id = y * iconsize + x;
			int index = id * 4;

			if (inputColour == "alpha") {
				idata[id] = input.data[index + 3] / 255.0;
			} else if (inputColour == "black") {
				idata[id] = 1 - (input.data[index] / 255.0);
			} else if (inputColour == "white") {
				idata[id] = input.data[index] / 255.0;
			}
		}
	}

	return idata;
}

List<double> existingIconExtractor(ImageData input, HashMap<String,String> settings) {
	CanvasElement tempcanvas = new CanvasElement()..width = iconsize..height = iconsize;
	CanvasRenderingContext2D tempctx = tempcanvas.context2D;

	String inputType = settings["inputtype"]!;
	String inputColour = settings["inputcolour"]!;

	tempctx.drawImage(images["mask_${inputType}"]!, 0,0);
	ImageData maskData = tempctx.getImageData(0,0,iconsize,iconsize);

	tempctx.clearRect(0,0,iconsize,iconsize);

	tempctx.drawImage(images["icon_${inputColour}"]!, 0,0);
	ImageData compareData = tempctx.getImageData(0,0,iconsize,iconsize);

	List<double> idata = new List<double>.filled(iconsize*iconsize, 0.0);

	for (int x=0; x<iconsize; x++) {
		for (int y=0; y<iconsize; y++) {
			int id = y * iconsize + x;
			int index = id * 4;

			double diff = colourdiffint(input.data[index], input.data[index+1], input.data[index+2], compareData.data[index], compareData.data[index+1], compareData.data[index+2]);

			double basediff = colourdifftint(compareData.data[index], compareData.data[index+1], compareData.data[index+2], tints[inputColour]!);
			if(basediff < 0.00001) {
				basediff = 0.00001;
			}

			double tdiff = colourdifftint(input.data[index], input.data[index+1], input.data[index+2], tints[inputColour]!);

			double factor = ((1-tdiff) * (diff/basediff)).clamp(0.0,1.0);

			idata[id] = factor * (maskData.data[index] / 255);
		}
	}

	return idata;
}

double colourdiffint(int r1, int g1, int b1, int r2, int g2, int b2) {
	double dr1 = r1 / 255;
	double dg1 = g1 / 255;
	double db1 = b1 / 255;

	double dr2 = r2 / 255;
	double dg2 = g2 / 255;
	double db2 = b2 / 255;

	return colourdiff(dr1, dg1, db1, dr2, dg2, db2);
}

double colourdiff(double dr1, double dg1, double db1, double dr2, double dg2, double db2) {

	return sqrt((dr1-dr2)*(dr1-dr2) + (dg1-dg2)*(dg1-dg2) + (db1-db2)*(db1-db2));
}

double colourdifftint(int r1, int g1, int b1, List<double> tint) {
	return colourdiff(r1/255, g1/255, b1/255, tint[0], tint[1], tint[2]);
}