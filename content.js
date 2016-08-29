
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
                                    .replace(/linked/, 'mentioned in the same breath')
                                    .replace(/swoop/, 'signing')
                                    .replace(/sources close to the player/, 'unnamed people who probably are just the player, his agent, or a figment of my imagination')
                                    .replace(/Jorge Mendes/, 'Jorge Ernst Stavro Blofeld Mendes')
                                    .replace(/Mino Raiola/, 'Beelzebub')
                                    .replace(/transfer window/, 'player transfer period that serves as an economic stimulus program for mediocre websites')
                                    .replace(/held talks/, 'probably texted')
                                    .replace(/subsidising his wages/, 'forking over a portion of his lofty wage package to make him vaguely desirable')
                                    .replace(/holding out/, 'exercising their right to say no and wait')
                                    .replace(/initial bid/, 'sneaky first attempt to score a bargain')
                                    .replace(/Southampton/, 'The Saint Mary Institute For Player Development and Liverpool Fleecing')
                                    .replace(/splashing out/, 'paying')
                                    .replace(/unnamed sources/, 'people who may have been made up by this reporter or someone else')
                                    .replace(/medicals/, 'tests to determine whether their bones and muscle are in roughly the correct spots')
                                    .replace(/medical/, 'test to determine whether their bones and muscle are in roughly the correct spots')
                                    .replace(/transfer rumours/, 'idle speculation')
                                    .replace(/free transfer/, 'an unusual piece of good business')
                                    .replace(/tracked/, 'explored using the medium of YouTube compilations set to bad techno')
                                    .replace(/talks stall/, 'discussions fail to reach a mutually agreeable solution')
                                    .replace(/locked in talks/, 'making slow progress')
                                    .replace(/raid/, 'legal maneuvre')
                                    .replace(/The Sun/, 'The Newspaper Whose Truth About Hillsborough Turned Out Not To Be Truthful and Incredibly Damaging')
                                    .replace(/free to leave/, 'permitted to go work somewhere else if that club is prepared to provide adequate financial compensation to his current employer')
                                    .replace(/it is believed/, 'it may be true though we cannot be certain')
                                    .replace(/tracked/, 'followed through channels available to everyone and pretended was top-secret surveillance')
                                    .replace(/starlet/, 'young player who may or may not turn out to be a star because who really knows about these things?')
                                    .replace(/no intention of selling/, 'does not plan on selling unless an ungodly sum is offered in which case everything is flexible')
                                    .replace(/asking price/, 'sum that would make the board happy')
                                    .replace(/valuation/, 'reasonably arbitrary determination of player value that is more of an art than a science')
                                    .replace(/release clause/, 'contractual provision that avoids a lot of posturing')
                                    .replace(/Transfer Talk/, 'Stream of Transfer Consciousness')
                                    .replace(/attracting interest/, 'gaining unspecified levels of attention from teams as a result of his performances')
                                    .replace(/weighing up a move/, 'possibly considering offering money to another club')
                                    .replace(/Jose Mourinho/, 'Jose "A Manchurian Candidate allegedly installed by Jorge Mendes" Mourinho')
                                    .replace(/Tancredi Palmeri/, 'SUPERBOMBAZO!!!')
                                    .replace(/Harry Redknapp/, 'That Manager Who Always Gives Interviews Through His Car Window')
                                    .replace(/could rise/, 'will likely rise — but nobody is willing to confirm as much — ')
                                    .replace(/Transfer news/, 'Rewritten club press release')
                                    .replace(/spending/, 'throwing money around')
                                    .replace(/penny pinching/, 'limiting spending to mere multi-million dollar outlays')
                                    .replace(/free transfer/, 'transfer in which there was no fee per se but free moves still involve other forms of compensation and are therefore something of a misnomer')
                                    .replace(/in talks/, 'possibly taking some action')
                                    .replace(/convinced/, 'encouraged without overriding his free will')
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
