## Why 12-tone equal temperament is very cool

Last year, I took the course "AP Music Theory" at my school, which covers the same material as a college-level introductory harmony course. I learned a lot in the course about writing and analyzing 18th-century four-part harmonies (really interesting stuff (that's not sarcastic)), all of which was based upon the premise the idea that music is made up of twelve notes. However, the course never proved this premise, or even really addressed it. Isn't it ridiculous that a student can take a year-long course in music theory and, by the end of it, not be able to explain why music uses twelve notes? Smh my head 🤦‍♂️. This article is my attempt to provide an acoustics-based foundation for the twelve-tone system used in AP Music Theory that is regretfully missing from the CollegeBoard's curriculum. If you're currently taking AP Music Theory, I hope that by reading this article you'll gain a deeper appreciation for the 12-tone system and also learn a bit about acoustics along the way!

You've probably heard of the idea that all sound is just a "wave". If you've seen a diagram of a sound wave, it might've looked something like this:

![](https://i.ibb.co/7gXq4XM/sound-wave.png)

The above diagram above shows the relationship between time and air pressure experienced by the listener while a pitch being played. In other words, if you were to play a tone from a speaker or a musical instrument, and then record the air pressure next to the source over time, the relationship would resemble the chart above.

There are two important things to notice about the sine wave in the above graph: its wavelength and its amplitude. These two attributes define pitch and loudness of the tone -- a shorter wavelength means that the pitch will sound "higher" and a higher amplitude of the graph will make the pitch sound "louder".

Not all real-world pitches are perfect sine waves (most aren't) but all real-world pitches oscillate. In fact, it is this oscillation that makes a musical note sound like a note to our ears. This is what defines a pitch.

Because of evolution, our ears are really good at being able to identify oscillations in a sound wave (it was evolutionarily advantageous for your ancestors to be able to tell if the loud sound coming from nearby their cave originated from a large mammoth or a small rabbit's vocal chords). Typical humans can recognize notes as low as 20 Hz and as high as 20,000 Hz, although most music falls in the 100 Hz to 1,500 Hz range.

The properties of sound waves become a lot more interesting when you consider multiple waves played simultaneously. If two different frequencies are being played at the same time, the sound wave perceived by a listener is the sum of the two component graphs. For example, if the frequencies 330 Hz (roughly an E4) and 660 Hz (roughly an E5) are being played, the resulting time-air pressure graph would look something like $\sin{(330 * 2x\pi)} + \sin{(660 * 2x\pi)}$, where $x$ is the number of seconds elapsed (the $2\pi$ is to scale the wavelength so that 330 or 660 periods fit into $1$ second, rather than $2\pi$ seconds). On a graph, this would look like:

![](https://i.ibb.co/886QVJb/graph2.png)

To the listener, the resulting pitch won't sound quite like a 330 Hz wave, nor will it sound quite like a 660 Hz wave. Your ears will perceive some of both frequencies. Looking at the waveform, this should make some sense. The absolute peaks and troughs of the wave are occurring on a slower 330 Hz cycle, while there also appears to be a faster waveform on a 660 Hz cycle closer to the vertical center of the graph.

So what does the combination of these two frequencies sound like? The following audio clip plays first the 330 Hz wave for 1 second, then the 660 Hz wave for 1 second, and then both frequencies simultaneously for 1 second.

<a href="https://www.gabe.biz/blog/assets/12tet/tone1.wav">Audio Link</a>

The two notes sound harmonious together (or as music theorists would say, "consonant") -- so much so that they sound almost like one note when played simultaneously. Let's look at another example of adding two frequencies together. However, instead of the frequency ratio being 1:2, we'll try 1:1.3 (in this case, 330 Hz and 429 Hz).

<a href="https://www.gabe.biz/blog/assets/12tet/tone2.wav">Audio Link</a>

Clearly, this pitch interval sounds a lot "worse" than the 1:2 ratio. But why? We get some insight into this if we look at its waveform:

![](https://i.ibb.co/ZMjF1rq/graph3.png)
_(note: I've changed the x-axis scale here from the previous graph to show more periods)_

Looking at the above graph, it's a lot less obvious where the 330 Hz and 429 Hz frequencies that comprise it are. There certainly seems to be some oscillation going on, but at this small scale, it's difficult to point to any specific repeated patterns that indicate component frequencies. Likewise, when you hear this waveform, it's difficult for your brain to process it as two frequencies rather than as one confusing waveform. According to scientists, the exact way that your brain parses a waveform and identifies (or fails to identify) its component frequencies is partially handled by hair cells on the cochlea -- although it's still a very mysterious process that's not entirely understood to this day. You can read more about that [hear](https://www.nih.gov/news-events/nih-research-matters/hearing-different-frequencies) (haha it's a pun).

The bottom line is that harmonies that have more easily identifiable oscillations sound "better" to humans. These harmonies tend to have frequency ratios that can be expressed as a ratio of two small integers (a 2:1 ratio sounds a lot better than a 13:10).

What other frequency ratios would sound good? A 3:2 ratio (330 Hz and 495 Hz in this case) would, because just like a 2:1 harmony, it's a simple integer ratio. Take a listen:

<a href="https://www.gabe.biz/blog/assets/12tet/tone3.wav">Audio Link</a>

If you have any background in music theory, you'll immediately recognize that interval as a [perfect fifth](https://en.wikipedia.org/wiki/Perfect_fifth). You might've also recognized the pervious 2:1 ratio as an octave. Much like the octave, the perfect fifth also sounds very stable. Here's its waveform:

![](https://i.ibb.co/W2Ljr4t/graph4.png)

We can clearly see a pattern repeating every 0.006 seconds or so. Let's take a look at another simple integer ratio, 4:3 (330 Hz and 440 Hz in this case):

<a href="https://www.gabe.biz/blog/assets/12tet/tone4.wav">Audio Link</a>

This is another recognizable interval -- it's a [perfect fourth](https://en.wikipedia.org/wiki/Perfect_fourth). By choosing simple pitch ratios, we seem to be rediscovering the most fundamental pitch intervals in Western music. This is not a coincidence, and it isn't isolated to just perfect fifth and perfect fourths. For example, here's what a 5:4 pitch ratio sounds like:

<a href="https://www.gabe.biz/blog/assets/12tet/tone5.wav">Audio Link</a>

This a [major third](https://en.wikipedia.org/wiki/Major_third). If we look at a 5:3 ratio, we get:

<a href="https://www.gabe.biz/blog/assets/12tet/tone6.wav">Audio Link</a>

This one is a bit less obvious, but it is actually a [major sixth](https://en.wikipedia.org/wiki/Major_sixth). And if we look at a 6:5 ratio, we get:

<a href="https://www.gabe.biz/blog/assets/12tet/tone7.wav">Audio Link</a>

... a minor third. If you're a musician living in an ancient society before harmony was discovered and you were the first person to discover that these intervals sound good, the next logical step would be to create an instrument to allows you to play all of them. Imagine you have a magical strip of tape that allows you to play any pitch on it within the span of an octave by pressing some position on the tape, where pitches on the right are higher and pitches on the left are lower (kind of like a piano). You can create marks on the instrument to notate which pitches you want to include in your "scale". The instrument might look something like this:

![](https://i.ibb.co/48XCbQd/instrument.png)

This is pretty cool -- now you're able to play any of the intervals we discussed relative to the lowest note on the instrument. You can even play major chords on it (330 Hz, 412.5 Hz, and 495 Hz for example). However, our instrument has major limitations. For example, it's impossible to play a major chord with 495 Hz (the fifth) as the root. You'd need to play the frequencies 618.75 Hz (the third from the fifth) and 742.5 Hz (the fifth from the fifth), but neither are accessible on our labelling system.

The reason for this is that our scale isn't "equal-tempered", which is another way of saying that the ratios between each of the adjacent notes aren't equal. As a result of this, it's not always possible to transpose a chord or a melody (such as transposing the major root chord up a fifth) because the gaps are uneven. Another related problem is that our instrument is stuck in one key, so all music played on it would have to be based around the root frequency 330 Hz. This is very musically limiting.

A solution to this problem is to use an equal-tempered system, where the ratio between each note of our scale is equal. For example, a 4-tone equal temperament (a.k.a. 4TET) system would contain four evenly spaced notes per octave (important note: by "evenly spaced" I mean geometrically not arithmetically, so the _ratio_ rather than the _difference_ between the frequencies of adjacent notes is equal). In our 4TET system, we'll call the frequency ratio between adjacent notes $r$. For our purposes, $r^4$ must equal $2$, so $r = 2^{1/4} \approx 1.1892$. More generally, for any $n$-TET system, the ratio between adjacent notes will be $2^{1/n}$.

The problem with an equal tempered scale is that the ratios of intervals tend to be very irrational, making most equal tempered scales sound very bad. An ideal equal tempered scale would be able to form intervals that closely approximate the clean pitch ratios of our instrument above (6:5, 5:4, 4:3, 3:2, 5:3, 2:1), even if they aren't exactly right. That way, it would be to change keys and transpose chords and melodies, while still having consonant intervals.

By pure coincidence, a 12-tone equal tempered system does an incredibly good job at this. In a 12TET system, you have access to the following pitch intervals:

$2^{1/12} \approx 1.05946$\
$2^{2/12} \approx 1.12246$\
$2^{3/12} \approx 1.18921$ (close to 6/5 = 1.2)\
$2^{4/12} \approx 1.25992$ (close to 5/4 = 1.25)\
$2^{5/12} \approx 1.33484$ (very close to 4/3 = 1.333...)\
$2^{6/12} \approx 1.41421$\
$2^{7/12} \approx 1.49831$ (very close to 3/2 = 1.5)\
$2^{8/12} \approx 1.58740$\
$2^{9/12} \approx 1.68179$ (close to 5/3 = 1.666...)\
$2^{10/12} \approx 1.78180$\
$2^{11/12} \approx 1.88775$\
$2^{12/12} = 2$ (octave)

This is the tuning system used by almost all instruments today. Any time that you've heard a perfect fifth, you actually weren't hearing a 1.5:1 ratio but rather a 1.498:1 ratio.

Although 12TET does compromise accuracy on some of the intervals (especially the minor 3rd, major 3rd and major 6th), it still does a good enough job on approximating them that most people don't think they sound particularly "out-of-tune" even though they technically are. And besides, the benefits of being able to transpose are much greater than the minor loss of accuracy on some of the notes.

Earlier in this blog post, when I played the 5:4 and 6:5 pitch ratios, some of you might've actually noticed that they sounded slightly out-of-tune (here's a the 6:5 again):

<a href="https://www.gabe.biz/blog/assets/12tet/tone7.wav">Audio Link</a>

This is because the 6:5 (or 1.2:1) ratio is slightly sharp of the 1.189:1 minor third you're probably used to hearing. Although the 6:5 is technically a more "pure" ratio than the 12TET approximation, most people get so used to the approximation that the clean ratio version of the minor third sounds out-of-tune to them.

As a result of creating an equal-tempered system to approximate the consonant intervals, a lot of dissonant intervals are added to our scale to fill in space. The minor 2nd, major 2nd, tritone, minor 7th, and major 7th all sound dissonant. The minor 6th also sounds dissonant in isolation, although it can sound major in certain contexts because it's an inversion of a major third. This is why some of the notes in the 12TET system sound "good" and why others sound "bad" -- the 12-tone equal temperament system wasn't _designed_ to have a tritone or a minor second, but it was impossible to allow for the consonant intervals without keeping the dissonant ones.

Although 12-tone equal temperament is by far the most common scale used in the West, it's not the only one. Defenders of "[53-tone equal temperament](https://en.wikipedia.org/wiki/53_equal_temperament)" argue that including 53 equally spaced notes in a scale instead of 12 gives you better approximations of the consonant intervals. 53TET knocks 12TET's perfect fifth approximation out of the park, with 31 semitones giving a $2^{31/53} \approx 1.499941:1$ ratio, much better than $1.498:1$. 53TET also approximates a major third as 17 semitones, or a $2^{17/53} \approx 1.248984:1$ and a minor third as $2^{14/53} \approx 1.200929:1$.

53-tone equal temperament has yet to catch on in mainstream music. Although it does approximate the consonant ratios much better than 12TET, it adds dozens of unpleasant intervals into the octave. As you might imagine, this makes it very challenging for a musician to decide which of 53 notes in an octave to play. It also requires pianos and other instruments to change their layouts to allow for 53 notes per octave, which makes most instruments bulky and hard to use. But [that's hasn't stopped people](https://www.youtube.com/watch?v=vTEBdMfmPL0) from creating microtonal instruments themselves!
