import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "@/types/Icons";

type SocialIconProps = {
  icon: SocialIcon;
};

export default function SocialIcon({ icon }: SocialIconProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "facebook":
        return faFacebook;
      case "twitter":
        return faTwitter;
      case "instagram":
        return faInstagram;
      case "linkedin":
        return faLinkedin;
      case "github":
        return faGithub;
      case "whatsapp":
        return faWhatsapp;
      case "telegram":
        return faTelegram;
      case "email":
        return faEnvelope;
      default:
        return faFacebook;
    }
  };

  return (
    <a
      className={`inline-block text-[40px] leading-[50px] h-[60px] w-[60px] text-${icon.name} relative z-[2] mr-[20px] mb-[10px] p-2.5 rounded-full 
                before:content-[""] before:absolute before:z-[-1] before:rounded-full before:inset-0 before:bg-white
                after:content-[""] after:absolute after:align-middle after:w-full after:h-full after:z-[-1] after:m-auto after:rounded-full after:scale-0 after:inset-0 after:bg-${icon.name}
                hover:animate-bubble2 hover:fill-mode-forwards hover:delay-100 hover:duration-500 hover:text-${icon.name} 
                hover:after:animate-bubble hover:after:fill-mode-forwards hover:after:duration-500`}
      rel="nofollow external noopener noreferrer"
      target="_new"
      href={icon.url}
    >
      <FontAwesomeIcon
        icon={getIcon(icon.name)}
        className="w-full h-full mb-5"
      />
    </a>
  );
}
