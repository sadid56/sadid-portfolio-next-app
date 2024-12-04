import { motion } from "framer-motion";
import ShineButton from "@/components/ui/Button/ShineButton";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import Icon from "@/components/common/Icon/Icon";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const ContactInfo = ({ isToggle }: { isToggle: boolean }) => {
  const contactVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div className="contact-info">
      <motion.h3
        initial="hidden"
        animate={isToggle ? "visible" : "hidden"}
        transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
        variants={contactVariants}
        className="text-lg md:text-xl font-semibold text-slate-300 uppercase font-outfit"
      >
        Contact Me
      </motion.h3>

      <div className="my-5 md:my-10 space-y-3 md:space-y-5">
        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.2 }}
          variants={contactVariants}
        >
          <h3 className="text-xl font-outfit font-medium text-slate-300">
            Whatsapp
          </h3>
          <p className="font-sm text-slate-400 font-medium font-poppins">
            +880 1739859756
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.3 }}
          variants={contactVariants}
        >
          <h3 className="text-xl font-outfit font-medium text-slate-300">
            Email
          </h3>
          <p className="font-sm text-slate-400 font-medium font-poppins">
            sadidhasan56@gmail.com
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 gap-3">
        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.4 }}
          variants={contactVariants}
        >
          <ShineButton
            url="https://drive.google.com/file/d/16aWRu7etzDn_vWgT879WpZM5yFprVP6F/view"
            text="Resume"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.5 }}
          variants={contactVariants}
        >
          <ShineButton
            onClick={() =>
              (window.location.href = "mailto:sadidhasan56@gmail.com")
            }
            text="Send Message"
          />
        </motion.div>
      </div>

      <div className="flex gap-3 items-center mt-5 ml-1">
        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.5 }}
          variants={contactVariants}
        >
          <LinkPreview url="https://github.com/sadid56/">
            <Icon Icon={IconBrandGithub} widht={2} />
          </LinkPreview>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.6 }}
          variants={contactVariants}
        >
          <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
            <Icon Icon={IconBrandFacebook} widht={2} />
          </LinkPreview>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.7 }}
          variants={contactVariants}
        >
          <LinkPreview url="https://discord.com/users/1151169623149002752/">
            <Icon Icon={IconBrandDiscord} widht={2} />
          </LinkPreview>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isToggle ? "visible" : "hidden"}
          transition={{ type: "tween", duration: 0.4, delay: 0.8 }}
          variants={contactVariants}
        >
          <LinkPreview url="https://www.linkedin.com/in/mr-sadid/">
            <Icon Icon={IconBrandLinkedin} widht={2} />
          </LinkPreview>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
