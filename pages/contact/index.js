import { motion, AnimatePresence } from 'framer-motion';
import { AnimationContent, AnimationTitle } from '../../components/Animations';
import Layouts from '../../components/Layouts';
import { Contacts } from '../../data/Contacts';

const Contact = () => {
  return (
    <AnimatePresence>
      <Layouts pageTitle=" | Contact">
        <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
          <motion.span {...AnimationTitle} className="title-page">
            CONTACT
          </motion.span>

          <motion.div {...AnimationContent} className="relative my-10 w-9/12 text-right md:my-0 md:w-2/5">
            {Contacts.map((contact) => (
              <a href={contact.href} target="_blank" rel="noreferrer" key={contact.id} className="my-4 flex justify-end fill-secondary-light transition-all duration-500 hover:fill-primary-light hover:text-primary-light">
                <div className="mr-8">
                  <h4 className="text-base">{contact.name}</h4>
                  <h3 className="text-sm font-extralight">{contact.value}</h3>
                </div>
                <div className="h-12 w-12">
                  <svg className="p-1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={contact.svg} />
                  </svg>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div {...AnimationContent} className="relative my-10 w-9/12 md:my-0 md:w-1/3">
            <form>
              <div className="w-full md:w-4/5">
                <input type="text" name="name" id="name" className="contact-form mb-3" placeholder="Name" />
                <input type="email" name="email" id="email" className="contact-form mb-3" placeholder="Email" />
                <textarea name="message" id="message" className="contact-form mb-2 h-40" placeholder="Write your message..." />
                <input type="submit" value="Send Message" className="contact-form" />
              </div>
            </form>
          </motion.div>
        </section>
      </Layouts>
    </AnimatePresence>
  );
};

export default Contact;
