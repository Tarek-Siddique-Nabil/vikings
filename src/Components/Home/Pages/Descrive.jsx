import React from "react";
import { imageFour, imageSecondary } from "../../../assets/Images";

const Descrive = () => {
  return (
    <section className="flex flex-col gap-20 items-center text-center">
      <div className="font-HappyMonkey font-normal text-4xl flex flex-col gap-0.5">
        <p>&nbsp;</p>
        <p>The Viking Pepes trace their origins to the deep,</p>
        <p>mystical fjords of the internet, where they forged their</p>
        <p>meme-mastering skills in the fires of dankness and wit.</p>{" "}
        <p>
          Drawing inspiration from the legendary Viking warriors of old,
          <p>they embarked on a quest to conquer the world of memes and </p>
          establish their dominance.
        </p>
      </div>
      <img src={imageSecondary} />
      <p className="font-Hanson text-5xl font-bold ">
        The Conquest of Memedom:
      </p>
      <div className="font-HappyMonkey font-normal   text-2xl">
        <p className="flex flex-col ">
          <span>
            The Viking Pepes have set sail on the turbulent seas of social
            media, armed with their
          </span>
          <span>
            distinctive horned helmets and a passion for humor that knows no
            bounds. They pillage and
          </span>{" "}
          <span>
            plunder the digital landscape, leaving behind a trail of laughter
            and viral memes.
          </span>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="flex flex-col">
          <span>
            With a blend of clever wordplay, imaginative graphics, and a
            penchant for the unexpected,
          </span>
          <span>
            the Viking Pepes have quickly gained a following that spans across
            the globe. Memes
          </span>
          <span>
            featuring these formidable conquerors can be found infiltrating
            every corner of the internet,
          </span>
          <span>
            from forums and social media to the deepest recesses of meme
            subcultures.
          </span>
        </p>
      </div>
      <img className="h-[650px]" src={imageFour} />
    </section>
  );
};

export default Descrive;
