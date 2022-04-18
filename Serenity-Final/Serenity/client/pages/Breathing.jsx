import React, { useEffect, useState } from "react";
import './Breathing.css'

const Breathing = () => {
  let quotesArr = [
    "Quiet the mind and the soul will speak. – Ma Jaya Sati Bhagavati",
    "Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings. - Arianna Huffington ",
    "Meditation is like a gym in which you develop the powerful mental muscles of calm and insight. – Ajahn Brahm",
    "When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place” —Bhagavad Gita",
    "Be here now. Be someplace later. Is that so complicated? – David M. Bader",
    "The quieter you become, the more you are able to hear – Rumi",
    "Your goal is not to battle with the mind, but to witness the mind.– Swami Muktananda",
  ];
  let randomValue = quotesArr[Math.floor(Math.random() * quotesArr.length)];
  let quote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

  return (
    <div className="container-fluid">
      <div>
        <h1> Meditation Techniques </h1>

        <div className="boxed">{`Meditative Wisdom: ${quote}`} </div>
        <div className="breathing-info mt-3">
          <h2>Boxed Breathing</h2>
          <p>
            When you begin your meditation journey, you may think to yourself,
            "How difficult can it be?". Believe it or not, there are many ways
            to meditate. One of the most popular ways, boxed breathing, will be
            instructed on this page.
          </p>
          <p>
            Boxed breathing is quiet easy when you get the hang of it. Here we
            will run through the steps.
          </p>
          <ul>
            <li>
              Step 1: Breathe in counting to four slowly. Feel the air enter
              your lungs.
            </li>
            <li>
              Step 2: Hold your breath for 4 seconds. Try to avoid inhaling or
              exhaling for 4 seconds.
            </li>
            <li>Step 3: Slowly exhale through your mouth for 4 seconds.</li>
            <li>Step 4: Repeat steps 1 to 3 until you feel re-centered.</li>
          </ul>
          <p>
            Demonstrated below is an image to help you visualize the ebb and
            flow of your breath during the meditation.
          </p>
        </div>
        <div className="technique text-center mt-3">
          <img id="boxed-img" src={require("../components/assets/Boxed.png")} />
        </div>
      </div>
      <div id="focus">
        <h2>Focused breathing</h2>
        <p>
          Now that we have learned about boxed breathing, lets move on to
          another popular meditation method, focused breathing. Focused
          breathing is relatively simple and can be broken down into these 6
          steps.
        </p>
        <ul>
          <li>Step 1: Close your eyes</li>
          <li>Step 2: Take a few big, deep breaths.</li>
          <li>Step 3: Breathe in. ...</li>
          <li>Step 4: Breathe out. ...</li>
          <li>
            Step 5: As you breathe out, say in your mind, "I breathe out stress
            and tension."
          </li>
          <li>Step 6: Continue for 10 to 20 minutes.</li>
        </ul>
      </div>

      <div id="focus-image">
        {" "}
        <div id="breathing">
          <div id="Breath-img">
            <img
              id="breathing-exercise"
              src={require("../components/assets/breathing-exercises.gif")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// let randomValue = quotesArr[Math.floor(Math.random() * myArray.length)];
// let quote = quotesArr[Math.floor(Math.random() * myShows.length)];

export default Breathing;
