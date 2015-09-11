var quotesArray = [
  ["Fyodor Dostoyevsky", "", "Above all, don’t lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.", 0, 0],
  ["Unknown", "", "Light is easy to love; show me your dark.", 0, 0],
  ["Robin Williams", "", "You're only give a little spark of madness. Don’t' lose it.", 0, 0],
  ["Friedrich Nietzsche", "", "He who has a why to live for can bear almost any how.", 0, 0],
  ["Benjamin Franklin", "", "He who sacrifices freedom for security deserves neither.", 0, 0],
  ["John Stuart Mill", "The Subjection of Women", "But was there ever any domination which did not appear natural to those who possessed it?", 0, 0],
  ["Charles Bukowski", "", "My father was a great literary teacher. He taught me the meaning of pain. Pain without reason.", 0, 0],
  ["Friedrich Nietzsche", "", "Men of profound sadness betray themselves when they are happy: they have a way of embracing happiness as if they wanted to crush and suffocate it, from jealousy: alas, they know only too well that it will flee.", 0, 0],
  ["Alexandre Dumas", "The Three Musketeers", "All for one and one for all, united we stand devided we fall.", 0, 0]
]

var author, source, quote, quoteAuthorSource, newQuote;

function randomQuote(quotes) {
  function escapeText(str) {
    return (str + '').replace(/[\\"]/g, '\\$&').replace(/\u0000/g, '\\0');
  };
  var random = Math.random();
  var i = Math.floor(random * (quotes.length));
  author = quotes[i][0];
  source = quotes[i][1];
  quote = escapeText(quotes[i][2] + (quotes[i][3] ? quotes[i][3] : '') + (quotes[i][4] ? quotes[i][4] : ''));
  quoteAuthorSource = {
    quoteProp: quote,
    authorProp: author,
    sourceProp: source
  };
  return quoteAuthorSource;
}

function quoteMaker(quotes) {
  randomQuote(quotes);
  newQuote = document.createTextNode(quoteAuthorSource.quoteProp);
  newAuthor = document.createTextNode(quoteAuthorSource.authorProp);
  newSource = document.createTextNode(quoteAuthorSource.sourceProp);
  var quoteText = document.getElementById("quote");
  var authorText = document.getElementById("author");
  var sourceText = document.getElementById("source");
  quoteText.replaceChild(newQuote, quoteText.firstChild);
  authorText.replaceChild(newAuthor, authorText.firstChild);
  sourceText.replaceChild(newSource, sourceText.firstChild);
}

//document.addEventListener("load", (quoteMaker()));
//document.getElementById("btn").addEventListener("click", (quoteMaker()));
