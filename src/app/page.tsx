import Image from "next/image";
import SocialIcon from "@/components/SocialIcons";
import { v4 as uuidv4 } from "uuid";

const socialIcons = [
  {
    id: uuidv4(),
    name: "facebook",
    url: "https://www.facebook.com/alishadman123",
  },
  {
    id: uuidv4(),
    name: "twitter",
    url: "https://twitter.com/AliShadman13",
  },
  {
    id: uuidv4(),
    name: "instagram",
    url: "https://www.instagram.com/alishadman95/",
  },
  {
    id: uuidv4(),
    name: "linkedin",
    url: "https://www.linkedin.com/in/alishadman13/",
  },
  {
    id: uuidv4(),
    name: "github",
    url: "https://github.com/AliShadman95",
  },
  {
    id: uuidv4(),
    name: "whatsapp",
    url: "https://wa.me/+393883785808",
  },
  {
    id: uuidv4(),
    name: "telegram",
    url: "https://t.me/AliShadman13",
  },
  {
    id: uuidv4(),
    name: "email",
    url: "mailto:mailto:alishadman955@gmail.com",
  },
];

export default function Home() {
  return (
    <section className="section content-padding">
      <div className="relative z-20 text-center">
        <header className="pt-36">
          <div className="text-center flex justify-center">
            <Image
              src="/images/ashd_ali_shadman_real.png"
              width={150}
              height={150}
              alt="Picture of me :)"
              className="rounded-full"
            />
          </div>
        </header>
        <article>
          <h1 className="text-7xl mb-10">Ali Shadman</h1>
          <p className="text-3xl mb-5">
            Web Developer • Snooker Player • #snooker
          </p>

          <div className='text-center w-full h-full before:content-[""] before:inline-block before:h-full before:align-middle'>
            {socialIcons.map((icon) => (
              <SocialIcon icon={icon} key={icon.id} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
