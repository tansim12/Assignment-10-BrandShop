const FAQs = () => {
  return (
    <div className="">
      <p className="text-5xl text-center from-purple-300 mb-10 via-red-500 to-indigo-500 bg-gradient-to-br text text-transparent bg-clip-text font-black">
        FAQs
      </p>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What is the Internet of Things (IoT)?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            Answer: The Internet of Things (IoT) refers to a network of
            interconnected devices and objects that can communicate with each
            other over the internet. These devices, equipped with sensors and
            connectivity, can collect and exchange data, enabling automation and
            remote control of various applications and services.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What is the difference between virtual reality (VR) and augmented
          reality (AR)?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            Answer: Virtual reality (VR) immerses users in a completely
            computer-generated environment, blocking out the real world.
            Augmented reality (AR), on the other hand, overlays digital
            information and objects onto the real world, enhancing the 
            perception of reality.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What is 5G technology, and how does it differ from 4G?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            {" "}
            Answer: 5G is the fifth generation of wireless technology, offering
            significantly faster data speeds, lower latency, and increased
            network capacity compared to 4G. It enables the development of
            applications like autonomous vehicles and augmented reality due to
            its ability to handle massive data loads and provide
            near-instantaneous communication.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          How does encryption work to secure data?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            {" "}
            Answer: Encryption is the process of converting readable data
            (plaintext) into an unreadable form (ciphertext) using mathematical
            algorithms and encryption keys. Only those with the correct
            decryption key can revert the data to its original form. This
            process ensures that even if data is intercepted, it remains
            confidential and secure.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What are the benefits of solid-state drives (SSDs) over traditional
          hard disk drives (HDDs)?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            {" "}
            Answer: SSDs offer several advantages over HDDs, including faster
            data access times, increased durability (as they have no moving
            parts), reduced power consumption, and improved shock resistance.
            These benefits make SSDs a popular choice for laptops and other
            devices where speed and reliability are crucial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
