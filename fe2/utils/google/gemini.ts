const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'hawk-hacks', location: 'us-central1'});
const model = 'gemini-1.5-flash-preview-0514';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
model: model,
generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 1,
    'topP': 0.95,
},
safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
],
});



export default async function isValid(imageSample: [string], image: string, description: string) {

    var arrayText = ''
    for (const image of imageSample) {
        arrayText += image.toString() + ', '
    }
    const text1 = {text: `We are a company that helps other companies find sample datasets for their ai vision models. 
    The company provides us with a sample set of images that would like to have more of with a description of what they are looking for.
    The sample set includes ${description} in the following array [${arrayText}]. This is  the photo that we are going to submit -> ${image}
    This photo may not be related to what the client wants and you will have to detect that. Return a boolean (true or false) stating if its a valid image
    , the first word should be boolean and no other text is needed. our image -> ${image}, and absolutly dont send any other data than the boolean.
    NEVER SEND ANYTHING ELSE, JUST THE BOOLEAN. TRUE OR FALSE`};
        

    const req =  {
        contents: [
            {role: 'user', parts: [text1]}
        ],
    };

    const streamingResp = await generativeModel.generateContentStream(req);
    const json = await streamingResp.response;
    process.stdout.write('final response: ' + json.candidates[0].content.parts[0].text);
    return json.candidates[0].content.parts[0].text;
}