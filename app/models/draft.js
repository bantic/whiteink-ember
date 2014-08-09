import DS from 'ember-data';

var Draft = DS.Model.extend({

  text: DS.attr('string'),
  notes: DS.hasMany('note', {async: true}),
  document: DS.belongsTo('document', {async: true})

});

Draft.reopenClass({
  FIXTURES: [
    {
      id: "1",
      document: "1",
      text: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly stay in place and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes. What has happened to me? he thought. It was no dream. He must have tried it a hundred times, closing his eyes so that he would not have to see the wriggling legs, and gave up only when he began to feel a light, dull pain in his side which he had never felt before. “O God,” he thought, “what a demanding job I’ve chosen! Day in, day out, on the road. The stresses of selling are much greater than the actual work going on at head office, and, in addition to that, I still have to cope with the problems of travelling, the worries about train connections, irregular bad food, temporary and constantly changing human relationships, which never come from  the heart. To hell with it all!” He felt a slight itching on the top of his abdomen. He slowly pushed himself on his back closer to the bed post so that he could lift his head more easily, found the itchy part, which was entirely covered with small white spots—he did not know what to make of them and wanted to feel the place with a leg, but he retracted it immediately, for the contact felt like a cold shower all over him. He slid back again into his earlier position. “This getting up early,” he thought, “makes a man quite idiotic. A man must have his sleep. Other travelling salesmen live like harem women. For instance, when I come back to the inn during the course of the morning to write up the necessary orders, these gentlemen are just sitting down to breakfast. If I were to try that with my boss, I’d be thrown out on the spot. Still, who knows whether that mightn’t be really good for me. If I didn’t hold back for my parents’ sake, I’d have quit ages ago. I would’ve gone to the boss and told him just what I think from the bottom of my heart. He would’ve fallen right off his desk! How weird it is to sit up at that desk and talk down to the employee from way up there. What’s more, the boss has trouble hearing, so the employee has to step up quite close to him. Anyway, I haven’t completely given up that hope yet. Once I’ve got together the money to pay off my parents’ debt to him—that should take another five or six years—I’ll do it for sure. Then I’ll make the big break. In any case, right now I have to get up. My train leaves at five o’clock.” He looked over at the alarm clock ticking away by the chest of drawers. “Good God!” he thought. It was half past six, and the hands were going quietly on. It was even past the half hour, already nearly quarter to. Could the alarm have failed to ring? One saw from the bed that it was properly set for four o’clock. Certainly it had rung. Yes, but was it possible to sleep peacefully through that noise which made the furniture shake? Now, it is true he had not slept peacefully, but evidently he had slept all the more deeply. Still, what should he do now? The next train left at seven o’clock. To catch that one, he would have to go in a mad rush. The sample collection was not packed up yet, and he really did not feel particularly fresh and active. And even if he caught the train, there was no avoiding a blow-up with the boss, because the firm’s errand boy would have waited for the five o’clock train and reported the news of his absence long ago. He was the boss’s minion, without backbone and intelligence. Well then, what if he reported in sick? But that would be extremely embarrassing and suspicious, because during his five years’ service Gregor had not been sick even once. The boss would certainly come with the doctor from the health insurance company and would reproach his parents for their lazy son and cut short all objections with the insurance doctor’s comments; for him everyone was completely healthy but really lazy about work. And besides, would the doctor in this case be totally wrong? Apart from a really excessive drowsiness after the long sleep, Gregor, in fact, felt quite well and even had a really strong appetite.",
      notes: ["1","2","3"]
    },
    {
      id: "2",
      document: "1",
      text: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. Her numerous legs, which were pitifully thin compared to the rest of her bulk, waved helplessly before her eyes. What has happened to me she",
      notes: ["4","5","6","7","8","9","10"]
    }
  ]
});

export default Draft;
