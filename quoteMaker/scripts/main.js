var quotesArray = [
  ["Rudyard Kipling","","A man can never have too much red wine, too many books, or too much ammunition",0,0],
  ["Rudyard Kipling","","The individual has always had to struggle to keep from being overwhelmed by the tribe. To be your own man is hard business. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",0,0],
  ["Rudyard Kipling","","War is an ill thing, as I surely know. But 'twould be an ill world for weaponless dreamers if evil men were not now and then slain.",0,0],
  ["Rudyard Kipling","","The first condition of understanding a foreign country is to smell it.",0,0],
  ["Alexandre Dumas","The Count of Monte Cristo","Moral wounds have this peculiarity - they may be hidden, but they never close; always painful, always ready to bleed when touched, they remain fresh and open in the heart.",0,0],
  ["Alexandre Dumas","","When you compare the sorrows of real life to the pleasures of the imaginary one, you will never want to live again, only to dream forever.",0,0],
  ["Fyodor Dostoyevsky","","Above all, don’t lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",0,0],
  ["Unknown","","Light is easy to love; show me your dark.",0,0],
  ["Robin Williams","","You're only give a little spark of madness. Don’t' lose it.",0,0],
  ["Friedrich Nietzsche","","He who has a why to live for can bear almost any how.",0,0],
  ["Benjamin Franklin","","He who sacrifices freedom for security deserves neither.",0,0],
  ["John Stuart Mill","The Subjection of Women","But was there ever any domination which did not appear natural to those who possessed it?",0,0],
  ["Charles Bukowski","","My father was a great literary teacher. He taught me the meaning of pain. Pain without reason.",0,0],
  ["Friedrich Nietzsche","","Men of profound sadness betray themselves when they are happy: they have a way of embracing happiness as if they wanted to crush and suffocate it, from jealousy: alas, they know only too well that it will flee.",0,0],
  ["Alexandre Dumas","The Three Musketeers","All for one and one for all, united we stand devided we fall.",0,0],
  ["Alexandre Dumas","The Count of Monte Cristo","What I’ve loved most after you, is myself: that is, my dignity and that strength which made me superior to other men. That Strength was my life. You’ve broken it with a word, so I must die.",0,0],
  ["Alexandre Dumas","The Three Musketeers","All falsehood is a mask; and however well made the mask may be, with a little attention we may always succeed in distinguishing it from the true face.",0,0],
  ["Alexandre Dumas","The Count of Monte Cristo","misfortune is needed to bring to light the treasures of the human intellect. Compression is needed to explode gunpowder. Captivity has brought my mental faculties to a focus; and you are well aware that from the collision of clouds electricity is produced — from electricity, lightning, from lightning, illumination.",0,0],
  ["Alexandre Dumas","The Count of Monte Cristo","If God were suddenly condemned to live the life which He has inflicted upon men, He would kill Himself.",0,0],
  ["Alexandre Dumas","","A person who doubts himself is like a man who would enlist in the ranks of his enemies and bear arms against himself.",0,0],
  ["Pablo Naruda","","Hay cierto placer en la locura, que sólo el loco conoce.",0,0],
  ["Pablo Naruda","","If nothing saves us from death, at least love should save us from life.",0,0],
  ["Pablo Naruda","","Así te amo porque no sé amar en otra manera.",0,0],
  ["Ernest Hemingway","","The best way to find out if you can trust somebody is to trust them.",0,0],
  ["Ernest Hemingway","A Farewell to Arms","If people bring so much courage to this world the world has to kill them to break them, so of course it kills them. The world breaks every one and afterward many are strong at the broken places. But those that will not break it kills. It kills the very good and the very gentle and the very brave impartially. If you are none of these you can be sure it will kill you too but there will be no special hurry.",0,0],
  ["Ernest Hemingway","","The best people possess a feeling for beauty, the courage to take risks, the discipline to tell the truth, the capacity for sacrifice. Ironically, their virtues make them vulnerable; they are often wounded, sometimes destroyed.",0,0],
  ["Ernest Hemingway","A Farewell to Arms","But life isn't hard to manage when you've nothing to lose.",0,0],
  ["Ernest Hemingway","A Moveable Feast","People were always the limiters of happiness except for the very few that were as good as spring itself.",0,0],
  ["Ernest Hemingway","","All things truly wicked start from innocence.",0,0],
  ["Ernest Hemingway","","They wrote in the old days that it is sweet and fitting to die for one's country. But in modern war, there is nothing sweet nor fitting in your dying. You will die like a dog for no good reason.",0,0],
  ["Ernest Hemingway","","You are so brave and quiet I forget you are suffering.",0,0],
  ["Ernest Hemingway","","When you start to live outside yourself, it's all dangerous.",0,0],
  ["Toni Morrison","","The function of freedom is to free someone else.",0,0],
  ["Toni Morrison","","Anything dead coming back to life hurts.",0,0],
  ["Toni Morrison","Song of Solomon","Gimme hate, Lord,” he whimpered. “I’ll take hate any day. But don’t give me love. I can’t take no more love, Lord. I can’t carry it...It’s too heavy. Jesus, you know, you know all about it. Ain’t it heavy? Jesus? Ain’t love heavy?",0,0],
  ["Toni Morrison","The Nobel Lecture in Literature","Think of our lives and tell us your particularized world. Make up a story. Narrative is radical, creating us at the very moment it is being created. We will not blame you if your reach exceeds your grasp; if love so ignites your words they go down in flames and nothing is left but their scald. Or if, with the reticence of a surgeon's hands, your words suture only the places where blood might flow. We know you can never do it properly - once and for all. Passion is never enough; neither is skill. But try. For our sake and yours forget your name in the street; tell us what the world has been to you in the dark places and in the light.",0,0],
  ["Toni Morrison","","To get to a place where you could love anything you chose--not to need permission for desire--well now _that_ was freedom.",0,0],
  ["Toni Morrison","The Bluest Eye","Beauty was not simply something to behold; it was something one could do.",0,0],
  ["Toni Morrison","Tar Baby","At some point in life the world's beauty becomes enough. You don't need to photograph, paint or even remember it. It is enough. No record of it needs to be kept and you don't need someone to share it with or tell it to. When that happens — that letting go — you let go because you can.",0,0],
  ["Toni Morrison","Sula","She had been looking all along for a friend, and it took her a while to discover that a lover was not a comrade and could never be - for a woman. And that no one would ever be that version of herself which she sought to reach out to and touch with an ungloved hand. There was only her own mood and whim, and if that was all there was, she decided to turn the naked hand toward it, discover it and let others become as intimate with their own selves as she was.",0,0],
  ["Toni Morrison","Song of Solomon","Perhaps that's what all human relationships boil down to: Would you save my life? or would you take it?",0,0],
  ["Toni Morrison","","I really think the range of emotions and perceptions I have had access to as a black person and as a female person are greater than those of people who are neither.... So it seems to me that my world did not shrink because I was a black female writer. It just got bigger.",0,0],
  ["Toni Morrison","Song of Solomon","She was fierce in the presence of death, heroic even, as she was at no other time. Its threat gave her direction, clarity, audacity.",0,0],
  ["David Foster Wallace","","The interesting thing is why we're so desperate for this anesthetic against loneliness.",0,0],
  ["David Foster Wallace","Infinite Jest","The truth will set you free. But not until it is finished with you.",0,0],
  ["David Foster Wallace","This is Water","Because here’s something else that’s weird but true: in the day-to day trenches of adult life, there is actually no such thing as atheism. There is no such thing as not worshipping. Everybody worships. The only choice we get is what to worship.",0,0],
  ["David Foster Wallace","","Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties — all these chase away loneliness by making me forget my name’s Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion — these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated.",0,0],
  ["David Foster Wallace","The Pale King","The underlying bureaucratic key is the ability to deal with boredom. To function effectively in an environment that precludes everything vital and human. To breathe, so to speak, without air.,The key is the ability, whether innate or conditioned, to find the other side of the rote, the picayune, the meaningless, the repetitive, the pointlessly complex. To be, in a word, unborable.,It is the key to modern life. If you are immune to boredom, there is literally nothing you cannot accomplish"]
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
