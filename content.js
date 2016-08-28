
function troncIt() {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text
                                    .replace(/undisclosed fee/, 'a fee that is presumably rising to eighty bajillion dollars because nobody is willing to reveal the number');
                                    .replace(/braced for a bid/, 'ready for another team to get in touch because that is how the sport works');
                                    .replace(/option to buy/ig, 'option to pay the actual transfer fee later because the club does not have the money right now');
                                    .replace(/slams shut/, 'gently closes just like everyone knew it would');
                                    .replace(/Ars(e|è)ne(\W)?Wenger/, 'the successful manager who Arsenal fans periodically freak out about');
                                    .replace(/pokemongo/ig, 'goingoutside')
                                    .replace(/(playing\W|played\W|play\W)?Pok(é|e)mon\WGo/gi, 'going outside')
                                    .replace(/(a\W)?Pok(é|e)mon/gi, 'fresh air')
                                    .replace(/lure\Wmodule/gi, 'big tent')
                                    .replace(/Pok(è|é|e)(\W)?stop/ig, 'place outside');

                if (replacedText !== text) {
                    node.textContent = replacedText;
                }
            }
        }
    }
}

// Do it once
troncIt();

// AND KEEP ON DOING IT!
setInterval(troncIt, 1000);
