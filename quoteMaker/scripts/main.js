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
  ["Ernest Hemingway","The Old Man and the Sea","I may not be as stong as I think, but I know many tricks and I have resolution.",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","You did not kill the fish only to keep alive and to sell for food, he thought. You killed him for pride and because you are a fisherman. You loved him when he was alive and you loved him after. If you love him, it is not a sin to kill him. Or is it more?",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","And bed, he thought. Bed is my friend. Just bed, he thought. Bed will be a great thing. It is easy when you are beaten, he thought. I never knew how easy it was. And what beat you, the thought.",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","He rested sitting on the un-stepped mast and sail and tried not to think but only to endure.",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","What kind of a hand is that,' he said. 'Cramp then if you want. Make yourself into a claw. It will do you no good.",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","He was too simple to wonder when he had attained humility. But he knew he had attained it and he knew it was not disgraceful and it carried no loss of true pride.",0,0],
  ["Ernest Hemingway","The Old Man and the Sea","He is a great fish and I must convince him, he thought. I must never let him learn his strength nor what he could do if he made his run.",0,0],
  ["Seneca","","No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.",0,0],
  ["Sir Thomas Fowell Buxton","","The longer I live, the more I am certain that the great difference between men—between the feeble and the powerful, the great and the insignificant—is energy, invincible determination—a purpose once fixed, and then—death or victory! That quality will do anything that can be done in this world, and no talents, no circumstances, no opportunities, will make a two-legged creature a man without it.",0,0],
  ["Orison Swett Marden","","This is the test of your manhood: How much is there left in you after you have lost everything outside of yourself?",0,0],
  ["David Gilmore","","Manhood is the defeat of childhood narcissism.",0,0],
  ["Frederick Douglass","","The lesson taught at this point by human experience is simply this, that the man who will get up will be helped upñ and the man who will not get up will be allowed to stay down. Personal independence is a virtue and it is the sould out of which comes the sturdiest manhood. But there can be no independence without a large share of self-dependence, and this virtue cannot be bestowed.It must be developed from within.",0,0],
  ["Jack Donovan","","Strength, Courage, Mastery, and Honor are the alpha virtues of men all over the world. They are the fundamental virtues of men because without them, no ‘higher’ virtues can be entertained.",0,0],
  ["W. G. Simms","","The amiable is a duty most certainly, but must not be exercised at the expense of any of the virtues. He who seeks to do the amiable always, can only be successful at the frequent expense of his manhood.",0,0],
  ["Waller Newell","","The combination of active and contemplative virtues is one of the most enduring themes in three thousand years of experience of what it means to be a man.",0,0],
  ["James Terry White","","It is not necessary for a man to be actively bad in order to make a failure in life; simple inaction will accomplish it. Nature has everywhere written her protest against idleness; everything which ceases to struggle, which remains inactive, rapidly deterioriates. It is the struggle toward an ideal, the constant effort to get higher and further, which develops manhood and character.",0,0],
  ["Jack Donovan","","Strength requires an opposing force, courage requires risk, mastery requires hard work, honor requires accountability to other men.",0,0],
  ["Benjamin Disraeli","","Life is too short to be little. Man is never so manly as when he feels deeply, acts boldly, and expresses himself with frankness and with fervor.",0,0],
  ["Malcolm X","","Nobody can give you freedom. Nobody can give you equality or justice or anything. If you're a man, you take it.",0,0],
  ["Jack Kerouac","","No man should go through life without once experiencing healthy, even bored solitude in the wilderness, finding himself, depending solely on himself and thereby learning of his true and hidden strength.",0,0],
  ["Alexandre Dumas","The Count of Monte Cristo","Life is a storm, my young friend. You will bask in the sunlight one moment, be shattered on the rocks the next. What makes you a man is what you do when that storm comes. You must look into that storm and shout as you did in Rome. Do your worst, for I will do mine!",0,0],
  ["Toni Morrison","","Freeing yourself was one thing; claiming ownership of that freed self was another.",0,0],
  ["Nina Simone","","Life is short. People are not easy to know. They're not easy to know, so if you don't tell them how you feel, you're not going to get anywhere, I feel.",0,0],
  ["Nina Simone","I Put a Spell on You","This is the world you have made yourself, now you have to live in it.",0,0],
  ["Nina Simone","","I've got life / And I'm gonna keep it / I've got life / And nobody's gonna take it away.",0,0],
  ["Vladimir Nabokov","Lolita","I mean, I have the feeling that something in my mind is poisoning everything else.",0,0],
  ["Vladimir Nabokov","Ada, or Ardor: A Family Chronicle","And yet I adore him. I think he's quite crazy, and with no place or occupation in life, and far from happy, and philosophically irresponsible – and there is absolutely nobody like him.",0,0],
  ["Vladimir Nabokov","Pale Fire","We are most artistically caged.",0,0],
  ["Vladimir Nabokov","The Stories of Vladimir Nabokov","The contemplation of beauty, whether it be a uniquely tinted sunset, a radiant face, or a work of art, makes us glance back unwittingly at our personal past and juxtapose ourselves and our inner being with the utterly unattainable beauty revealed to us.",0,0],
  ["Vladimir Nabokov","Speak, Memory","It is certainly not then - not in dreams - but when one is wide awake, at moments of robust joy and achievement, on the highest terrace of consciousness, that mortality has a chance to peer beyond its own limits, from the mast, from the past and its castle tower. And although nothing much can be seen through the mist, there is somehow the blissful feeling that one is looking in the right direction.",0,0],
  ["Vladimir Nabokov","Lolita","For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm.",0,0],
  ["Toni Morrison","Beloved","She is a friend of mind. She gather me, man. The pieces I am, she gather them and give them back to me in all the right order. It's good, you know, when you got a woman who is a friend of your mind.",0,0],
  ["Toni Morrison","Sula","Like any artist without an art form, she became dangerous.",0,0],
  ["Toni Morrison","","I tell my students, 'When you get these jobs that you have been so brilliantly trained for, just remember that your real job is that if you are free, you need to free somebody else. If you have some power, then your job is to empower somebody else. This is not just a grab-bag candy game.",0,0],
  ["Toni Morrison","Song of Solomon","She was the third beer. Not the first one, which the throat receives with almost tearful gratitude; nor the second, that confirms and extends the pleasure of the first. But the third, the one you drink because it's there, because it can't hurt, and because what difference does it make?",0,0],
  ["Toni Morrison","The Bluest Eye","Along with the idea of romantic love, she was introduced to another--physical beauty. Probably the most destructive ideas in the history of human thought. Both originated in envy, thrived in insecurity, and ended in disillusion.",0,0],
  ["Toni Morrison","","I tried to write a universal novel, it would be water. Behind this question is the suggestion that to write for black people is somehow to diminish the writing. From my perspective there are only black people. When I say 'people,' that's what I mean.",0,0],
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
  ["David Foster Wallace","The Pale King","The underlying bureaucratic key is the ability to deal with boredom. To function effectively in an environment that precludes everything vital and human. To breathe, so to speak, without air.","The key is the ability, whether innate or conditioned, to find the other side of the rote, the picayune, the meaningless, the repetitive, the pointlessly complex. To be, in a word, unborable.","It is the key to modern life. If you are immune to boredom, there is literally nothing you cannot accomplish"],
  ["David Foster Wallace","Infinite Jest","A U. S. of modern A. where the State is not a team or a code, but a sort of sloppy intersection of desires and fears, where the only public consensus a boy must surrender to is the acknowledged primacy of straight-line pursuing this flat and short-sighted idea of personal happiness.",0,0],
  ["David Foster Wallace","This is Water","The really important kind of freedom involves attention, and awareness, and discipline, and effort, and being able truly to care about other people and to sacrifice for them, over and over, in myriad petty little unsexy ways, every day.",0,0],
  ["David Foster Wallace","A Supposedly Fun Thing I'll Never Do Again","Lonely people tend, rather, to be lonely because they decline to bear the psychic costs of being around other humans. They are allergic to people. People affect them too strongly.",0,0],
  ["David Foster Wallace","Consider the Lobster and Other Essays","...in real life I always seem to have a hard time winding up a conversation or asking somebody to leave, and sometimes the moment becomes so delicate and fraught with social complexity that I'll get overwhelmed trying to sort out all the different possible ways of saying it and all the different implications of each option and will just sort of blank out and do it totally straight -- 'I want to terminate the conversation and not have you be in my apartment anymore' -- which evidently makes me look either as if I'm very rude and abrupt or as if I'm semi-autistic and have no sense of how to wind up a conversation gracefully...I've actually lost friends this way.",0,0],
  ["David Foster Wallace","Oblivion","The truth is you already know what it's like. You already know the difference between the size and speed of everything that flashes through you and the tiny inadequate bit of it all you can ever let anyone know. As though inside you is this enormous room full of what seems like everything in the whole universe at one time or another and yet the only parts that get out have to somehow squeeze out through one of those tiny keyholes you see under the knob in older doors. As if we are all trying to see each other through these tiny keyholes.","But it does have a knob, the door can open. But not in the way you think...The truth is you've already heard this. That this is what it's like. That it's what makes room for the universes inside you, all the endless inbent fractals of connection and symphonies of different voices, the infinities you can never show another soul. And you think it makes you a fraud, the tiny fraction anyone else ever sees? Of course you're a fraud, of course what people see is never you. And of course you know this, and of course you try to manage what part they see if you know it's only a part. Who wouldn't? It's called free will, Sherlock. But at the same time it's why it feels so good to break down and cry in front of others, or to laugh, or speak in tongues, or chant in Bengali--it's not English anymore, it's not getting squeezed through any hole. ","So cry all you want, I won't tell anybody."],
  ["David Foster Wallace","This is Water","Learning how to think",0,0],
  ["David Foster Wallace","","Good fiction’s job is to comfort the disturbed and disturb the comfortable.",0,0],
  ["David Foster Wallace","","True heroism is minutes, hours, weeks, year upon year of the quiet, precise, judicious exercise of probity and care—with no one there to see or cheer. This is the world.",0,0],
  ["David Foster Wallace","Infinite Jest","You can be shaped, or you can be broken. There is not much in between. Try to learn. Be coachable. Try to learn from everybody, especially those who fail. This is hard. ... How promising you are as a Student of the Game is a function of what you can pay attention to without running away.",0,0],
  ["David Foster Wallace","","An ad that pretends to be art is -- at absolute best -- like somebody who smiles warmly at you only because he wants something from you. This is dishonest, but what's sinister is the cumulative effect that such dishonesty has on us: since it offers a perfect facsimile or simulacrum of goodwill without goodwill's real spirit, it messes with our heads and eventually starts upping our defenses even in cases of genuine smiles and real art and true goodwill. It makes us feel confused and lonely and impotent and angry and scared. It causes despair.",0,0],
  ["David Foster Wallace","The Pale King","Hear this or not, as you will. Learn it now, or later -- the world has time. Routine, repetition, tedium, monotony, ephemeracy, inconsequence, abstraction, disorder, boredom, angst, ennui -- these are the true hero's enemies, and make no mistake, they are fearsome indeed. For they are real.",0,0],
  ["David Foster Wallace","Quack This Way","If you spend enough time reading or writing, you find a voice, but you also find certain tastes. You find certain writers who when they write, it makes your own brain voice like a tuning fork, and you just resonate with them. And when that happens, reading those writers—not all of whom are modern . . . I mean, if you are willing to make allowances for the way English has changed, you can go way, way back with this— becomes a source of unbelievable joy. It’s like eating candy for the soul. So probably the smart thing to say is that lucky people develop a relationship with a certain kind of art that becomes spiritual, almost religious, and doesn’t mean, you know, church stuff, but it means you’re just never the same.",0,0],
  ["David Foster Wallace","","Mediocrity is contextual.",0,0],
  ["David Foster Wallace","","We all suffer alone in the real world. True empathy's impossible. But if a piece of fiction can alow us imaginatively to identify with a character's pain, we might then also more easily conceive of others identifying with their own. This is nourishing, redemptive; we become less alone inside. It might just be that simple.",0,0],
  ["David Foster Wallace","","I strongly suspect a big part of real art fiction’s job is to aggravate this sense of entrapment and loneliness and death in people, to move people to countenance it, since any possible human redemption requires us first to face what’s dreadful, what we want to deny.",0,0],
  ["David Foster Wallace","Brief Interviews with Hideous Men","When they were introduced, he made a witticism, hoping to be liked. She laughed extremely hard, hoping to be liked. Then each drove home alone, staring straight ahead, with the very same twist to their faces.","The man who'd introduced them didn't much like either of them, though he acted as if he did, anxious as he was to preserve good relations at all times. One never knew, after all, now did one now did one now did one.",0],
  ["David Foster Wallace","","This is so American, man: either make something your god and cosmos and then worship it, or else kill it.",0,0],
  ["David Foster Wallace","Brief Interviews with Hideous Men","‘This thing I feel, I can’t name it straight out but it seems important, do you feel it too?’ - this sort of direct question is not for the squeamish. For one thing, it’s perilously close to “Do you like me? Please like me,” which you know quite well that 99% of all interhuman manipulation and bullshit gamesmanship that goes on goes on precisely because the idea of saying this sort of thing straight out is regarded as somehow obscene.",0,0],
  ["David Foster Wallace","Infinite Jest","Like most North Americans of his generation, Hal tends to know way less about why he feels certain ways about the objects and pursuits he's devoted to than he does about the objects and pursuits themselves. It's hard to say for sure whether this is even exceptionally bad, this tendency.",0,0],
  ["David Foster Wallace","Consider the Lobster and Other Essays","No wonder we cannot appreciate the really central Kafka joke: that the horrific struggle to establish a human self results in a self whose humanity is inseparable from the horrific struggle. That our endless and impossible journey toward home is in fact our home.",0,0],
  ["David Foster Wallace","Infinite Jest","You are what you love. No? You are, completely and only, what you would die for without, as you say, the thinking twice.",0,0]
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
