var args = process.argv.slice(2);
var text = args[0];
return markdownToJSON(text);

function markdownToJSON (markdown) {
    const paramsJSON = {};
    const paramArray = markdown.toString().split('* **').map(p => p.split('\n'));
    paramArray.forEach((param, index) => {
        const lines = param;
        let descriptionEnd = false;
        const description = [];
        let paramName;
        let displayName;
        let example;
        let required = true;
        let lineIndex;
        lines.forEach((line, index) => {
            lineIndex = index;
            if (line.includes('optional')) {
                required = false;
            }
            if (index === 0) {
                displayName = line.split('**')[0];
                paramName = displayName.trim().toLowerCase().replace(/\W*-{2,}\W*/g, '--').replace(/(?!--)(\W+)/g, '-').replace(/^-+/g, '');
            }
            if (!descriptionEnd) {
                if (line.includes('Example:')) {
                    example = line.substring(line.indexOf('Example: ') + 9, line.length);
                    descriptionEnd = true;
                } else {
                    if (line.includes('Description:')) {
                        const substring = line.substring(line.indexOf('Description: ') + 13, line.length).trim();
                        description.push(substring);
                    } else if (description.length) {
                        description.push(line.trim());
                    }
                }
            }
            return;
        });
        if (lineIndex === paramArray[index].length - 1 && displayName) {
            paramsJSON[paramName] = {
                type: 'string',
                displayName,
                description,
                example,
                required: required ? required : false
            };
        }
    });
    console.log('\n\nHere is your action configuration JSON: \n')
    console.log(JSON.stringify(paramsJSON, null, 2));
}