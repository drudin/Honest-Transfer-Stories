
function troncIt() {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text
                                    .replace(/undisclosed fee/, 'a fee that is presumably rising to eighty bajillion dollars because nobody is willing to reveal the number')
                                    .replace(/braced for a bid/, 'ready for another team to get in touch because that is how the sport works')
                                    .replace(/option to buy/ig, 'option to pay the actual transfer fee later because the club does not have the money right now')
                                    .replace(/slams shut/, 'gently closes just like everyone knew it would')
                                    .replace(/Ars(e|è)ne(\W)?Wenger/, 'the successful manager who Arsenal fans periodically freak out about')
                                    .replace(/transfer request/, 'request to work somewhere else')
                                    .replace(/wantaway/, 'keen on living or working somewhere else at this point in his life')
                                    .replace(/star/, 'player of some value')
                                    .replace(/trimming squad/, 'cutting down the size of their squad after spending unwisely in the past')
                                    .replace(/under contract/, 'in a strictly legal sense obliged to ply his trade')
                                    .replace(/agreed terms/, 'agreed to a significant pay package')
                                    .replace(/not for sale/, 'unavailable, unless a bigger offer comes in, at which point he will definitely be for sale')
                                    .replace(/target/, 'object of affection')
                                    .replace(/important player/, 'man with two legs who runs around a bit')
                                    .replace(/capture/, 'contractual agreement')
                                    .replace(/dream/, 'allegedly desirable')
                                    .replace(/vitesse/, 'The Chelsea finishing school in the Netherlands for prospects who just have not made the cut')
                                    .replace(/vitesse arnhem/, 'The Chelsea finishing school in the Netherlands for prospects who just have not made the cut')
                                    .replace(/no interest/, 'some interest but nothing they are willing to confirm in public')
                                    .replace(/potential deal/, 'deal that could happen provided everyone is happy with it and all the money and contractual terms are mutually agreeable')
                                    .replace(/eyeing/, 'considering')
                                    .replace(/transfer deadline/, 'last day of the transfer window that clubs would rather you forget they knew about all along')
                                    .replace(/injury prone/, 'human with breakable bones and damageable muscles')
                                    .replace(/injury-prone/, 'human-with-breakable-bones-and-damageable-muscles')
                                    .replace(/club sources/, 'people working for the club who refused to be identified and therefore may or may not exist')
                                    .replace(/strongly linked/, 'repeatedly mentioned in the same breath')
                                    .replace(/negotiations/, 'talks between various parties and legal or financial experts');

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
