"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Gift, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="medium"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About Us",          id: "#about-us"},
        {
          name: "Our Menu",          id: "#offerings"},
        {
          name: "Shop",          id: "#shop"},
        {
          name: "Experiences",          id: "#experiences"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Partners",          id: "#partners"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="SereniTea House"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Experience TranquiliTea"
      description="Where every cup tells a story of serenity and exceptional flavor. Indulge in our exquisite tea blends and delectable pastries."
      testimonials={[
        {
          name: "Sophia Chen",          handle: "@TeaLover",          testimonial: "SereniTea House offers an unparalleled tea experience. The ambiance is so calming, and their selection is exquisite!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-dreamy-smiling-young-woman-drinks-coffee-looks-thoughtful-stands-kitchen_1258-198166.jpg",          imageAlt: "Sophia Chen"},
        {
          name: "Liam Rodriguez",          handle: "@CafeExplorer",          testimonial: "A true gem! The pastries are divine, and the staff's knowledge of tea is impressive. Highly recommend for a relaxing escape.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-restaurant_23-2148395381.jpg",          imageAlt: "Liam Rodriguez"},
        {
          name: "Isabella Kim",          handle: "@GourmetGuide",          testimonial: "Every visit feels like a retreat. The attention to detail, from the brewing to the presentation, is simply perfect.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-copy-space_23-2148548126.jpg",          imageAlt: "Isabella Kim"},
        {
          name: "Ethan Davis",          handle: "@FoodCriticX",          testimonial: "An authentic tea destination. The unique blends and harmonious food pairings make SereniTea House a must-visit.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-kitchen_23-2149631733.jpg",          imageAlt: "Ethan Davis"},
        {
          name: "Ava Wilson",          handle: "@SweetTooth",          testimonial: "The best afternoon tea I've ever had! The scones were fresh, the tea was fragrant, and the atmosphere was delightful.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-drinking-coffee-reading-newspaper_23-2147793074.jpg",          imageAlt: "Ava Wilson"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/indoor-shot-smiling-pretty-woman-having-cup-coffee-kitchen-standing-with-pleasant-smile-enjoying-hot-tea-morning-after-breakfast-looking-camera-with-positive_176532-15759.jpg",          alt: "Sophia Chen"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-sitting-floor-with-cup-tea-book-top-view_169016-49041.jpg",          alt: "Liam Rodriguez"},
        {
          src: "http://img.b2bpic.net/free-photo/pensive-beautiful-female-pensioner-wearing-stylish-rectangular-eyeglasses-blue-jacket-holding-mug-enjoying-aroma-good-fresh-cappuccino-gray-haired-elegant-senior-woman-drinking-tea_344912-2144.jpg",          alt: "Isabella Kim"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064824.jpg",          alt: "Ethan Davis"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-smiling-woman-holding-cup-coffee-posing-kitchen-enjoying_1258-198203.jpg",          alt: "Close up portrait of beautiful smiling woman holding cup of coffee posing in the kitchen enjoying"},
      ]}
      avatarText="Loved by tea enthusiasts"
      imageSrc="https://img.b2bpic.net/premium-photo/cup-coffee-wooden-table-with-sun-shining-through-trees_1206963-77578.jpg?id=335307984"
      imageAlt="Elegant tea restaurant interior with warm lighting and a tea set"
      showDimOverlay={false}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about-us" data-section="about-us">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Story: A Journey Through Tea"
      description={[
        "At SereniTea House, we believe in the art of tea. Our journey began with a passion for exquisite flavors and a desire to create a tranquil space where guests can unwind and savor every moment. We carefully source the finest loose-leaf teas from around the globe, ensuring a unique and memorable experience with every brew. Our commitment to quality extends to our artisanal pastries and light bites, crafted to complement our diverse tea selection.",        "Step into SereniTea House and discover a haven where tradition meets modern elegance. Whether you're seeking a quiet moment of reflection or a delightful gathering with friends, our serene ambiance and attentive service promise an unforgettable escape. Join us as we celebrate the rich history and vibrant culture of tea, one delightful cup at a time."]}
      buttons={[
        {
          text: "Discover Our Philosophy",          href: "#"},
      ]}
      showBorder={false}
    />
  </div>

  <div id="offerings" data-section="offerings">
      <FeatureCardTwelve
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      features={[
        {
          id: "f1",          label: "Premium Tea Selection",          title: "Finest Loose Leaf Teas",          items: [
            "Carefully sourced from renowned tea gardens.",            "Diverse range of black, green, oolong, and herbal blends.",            "Expertly curated for unique flavor profiles."],
          buttons: [
            {
              text: "Explore Teas",              href: "#shop"},
          ],
        },
        {
          id: "f2",          label: "Artisanal Pastries",          title: "Handcrafted Delicacies",          items: [
            "Freshly baked daily by our skilled pâtissiers.",            "Perfectly paired with our tea selection.",            "Seasonal ingredients for exquisite taste."],
          buttons: [
            {
              text: "View Pastries",              href: "#"},
          ],
        },
        {
          id: "f3",          label: "High Tea Experiences",          title: "Elegant Afternoon Rituals",          items: [
            "A selection of sweet and savory treats.",            "Served with your choice of premium tea.",            "Ideal for special occasions and gatherings."],
          buttons: [
            {
              text: "Book an Experience",              href: "#experiences"},
          ],
        },
      ]}
      title="Our Exquisite Offerings"
      description="Discover a curated selection of premium teas, handcrafted pastries, and delightful savory bites, each designed to elevate your experience."
    />
  </div>

  <div id="shop" data-section="shop">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Imperial Oolong",          price: "$28.00",          variant: "50g Loose Leaf",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-fresh-green-tea-glass-teapot-ceremony-old-rustic-table_1220-1712.jpg",          imageAlt: "Imperial Oolong tea"},
        {
          id: "p2",          name: "Jasmine Green Tea",          price: "$22.00",          variant: "100g Loose Leaf",          imageSrc: "https://img.b2bpic.net/free-photo/tea-picker-woman-s-asian-hands-close-up-pretty-tea-picking-girl-plantation_1150-14737.jpg?id=5216138",          imageAlt: "Jasmine Green tea"},
        {
          id: "p3",          name: "Ceremonial Matcha",          price: "$35.00",          variant: "30g Powder",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-with-green-paint-bowl_23-2148292598.jpg",          imageAlt: "Ceremonial Matcha"},
        {
          id: "p4",          name: "English Breakfast",          price: "$18.00",          variant: "100g Loose Leaf",          imageSrc: "http://img.b2bpic.net/free-photo/spoon-with-herbs-tea_23-2148555448.jpg",          imageAlt: "English Breakfast tea"},
        {
          id: "p5",          name: "Ginger Lemon Herbal",          price: "$20.00",          variant: "75g Loose Leaf",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-seasoning-composition-different-colored-inside-spoons-grey-rustic-desk-tea-dry-plant-color_140725-80094.jpg",          imageAlt: "Ginger Lemon Herbal tea"},
        {
          id: "p6",          name: "Silver Needle White Tea",          price: "$40.00",          variant: "30g Loose Leaf",          imageSrc: "http://img.b2bpic.net/free-photo/delicate-white-rose-blooming-with-bud-soft-light_84443-84440.jpg",          imageAlt: "Silver Needle White Tea"},
      ]}
      title="Curated Tea Collection"
      description="Bring the SereniTea House experience home with our exquisite selection of loose-leaf teas and elegant teaware."
    />
  </div>

  <div id="experiences" data-section="experiences">
      <PricingCardEight
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic-tea",          badge: "Everyday Elegance",          badgeIcon: Leaf,
          price: "$35/person",          subtitle: "Classic Afternoon Tea",          buttons: [
            {
              text: "Book Now",              href: "#contact"},
          ],
          features: [
            "Selection of 3 premium teas",            "Assortment of 4 finger sandwiches",            "2 freshly baked scones with clotted cream & jam",            "Selection of 3 mini pastries"],
        },
        {
          id: "premium-tea",          badge: "Signature Indulgence",          badgeIcon: Sparkles,
          price: "$55/person",          subtitle: "SereniTea Grand High Tea",          buttons: [
            {
              text: "Reserve Now",              href: "#contact"},
          ],
          features: [
            "Selection of 5 rare and premium teas",            "Assortment of 6 gourmet finger sandwiches",            "2 artisanal scones with house-made preserves",            "Selection of 5 handcrafted pastries",            "Glass of sparkling elderflower fizz"],
        },
        {
          id: "celebration-package",          badge: "Special Occasion",          badgeIcon: Gift,
          price: "Custom Quote",          subtitle: "Private Celebration Package",          buttons: [
            {
              text: "Inquire",              href: "#contact"},
          ],
          features: [
            "Exclusive use of private dining room",            "Customizable tea and food menu",            "Personalized service for your event",            "Floral decorations and bespoke settings",            "Perfect for birthdays, anniversaries, or corporate events"],
        },
      ]}
      title="Indulge in Our Tea Experiences"
      description="Choose from our exclusive tea experiences, from intimate afternoon teas to grand celebratory events, designed for every occasion."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test1",          name: "Eleanor Vance",          handle: "@TeaTimeCritic",          testimonial: "An absolute haven! The Darjeeling Second Flush was brewed to perfection, and the cucumber sandwiches were a dream. SereniTea House is now my go-to for peaceful afternoons.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-tea-party-composition_23-2149064373.jpg",          imageAlt: "Eleanor Vance"},
        {
          id: "test2",          name: "Marcus Thorne",          handle: "@GourmetSeeker",          testimonial: "The High Tea experience was beyond expectations. Every pastry was a work of art, and the service was impeccable. A truly premium experience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-white-cup-saucer-suit-hat-looking-cheerful-front-view_176474-22860.jpg",          imageAlt: "Marcus Thorne"},
        {
          id: "test3",          name: "Chloe Sterling",          handle: "@CafeLife",          testimonial: "I love discovering unique places, and SereniTea House is just that. The ambiance, the aroma, and the exquisite selection make it unforgettable.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-satisfied-bearded-guy-white-shirt-showing-thumbs-up-approval-like-agree-positiv_1258-113975.jpg",          imageAlt: "Chloe Sterling"},
        {
          id: "test4",          name: "David & Sarah Lee",          handle: "@CoupleAdventures",          testimonial: "Our anniversary afternoon tea here was magical. Thank you for the wonderful memories and the delicious treats!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/three-girls-have-pajamas-party-home_1157-30422.jpg",          imageAlt: "David and Sarah Lee"},
        {
          id: "test5",          name: "Olivia White",          handle: "@FoodieFinds",          testimonial: "Hands down the best tea selection in the city. Their Oolong recommendations were spot on, and the serene environment is perfect for unwinding.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-hands-taking-photo-muffin_23-2149277996.jpg",          imageAlt: "Olivia White"},
      ]}
      showRating={true}
      title="What Our Guests Say"
      description="Hear from those who have savored the unique tranquility and flavors of SereniTea House."
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Organic Leaf Co.",        "Culinary Arts Institute",        "City Food Critics",        "Gourmet Magazine",        "Artisan Bakehouse",        "Eco-Harvest Farms",        "Hospitality Guild"]}
      title="Trusted by Connoisseurs & Partners"
      description="We partner with leading tea growers, local artisans, and culinary experts to bring you an unparalleled experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How do I make a reservation?",          content: "You can make a reservation easily through our website's contact form, by calling us directly during opening hours, or by using our third-party booking partner link. We recommend booking at least 48 hours in advance for weekend high tea experiences."},
        {
          id: "q2",          title: "Do you accommodate dietary restrictions?",          content: "Yes, we strive to accommodate various dietary restrictions including gluten-free, dairy-free, and vegetarian options. Please inform us of any allergies or dietary needs when making your reservation, and our team will be happy to assist you."},
        {
          id: "q3",          title: "What types of tea do you offer?",          content: "Our menu features an extensive selection of premium loose-leaf teas from around the world, including black teas, green teas, oolongs, white teas, and a variety of herbal infusions. Our knowledgeable staff can guide you through our offerings to find your perfect brew."},
        {
          id: "q4",          title: "Can I purchase loose-leaf tea to take home?",          content: "Absolutely! Many of our exquisite tea blends are available for purchase in our shop section online or directly at the restaurant. It's a wonderful way to continue the SereniTea House experience at home."},
      ]}
      title="Your Questions Answered"
      description="Find quick answers to common inquiries about reservations, special requests, and our tea selection."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Connect With Us"
      title="Plan Your Visit or Inquiry"
      description="We look forward to welcoming you to SereniTea House. Fill out the form below for reservations or any questions."
      inputPlaceholder="Your Email"
      buttonText="Send Message"
      termsText="By submitting this form, you agree to our privacy policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/cozy-still-life-with-glass-cup-tea-teapot-candles_169016-12954.jpg"
      imageAlt="Tea restaurant interior at sunset"
      logoText="SereniTea House"
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Our Story",              href: "#about-us"},
            {
              label: "Tea Menu",              href: "#offerings"},
            {
              label: "Experiences",              href: "#experiences"},
            {
              label: "Shop Tea",              href: "#shop"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Reservations",              href: "#contact"},
            {
              label: "Gift Cards",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Instagram",              href: "https://instagram.com/sereniteahouse"},
            {
              label: "Facebook",              href: "https://facebook.com/sereniteahouse"},
            {
              label: "Reviews",              href: "#reviews"},
          ],
        },
      ]}
      copyrightText="© 2025 SereniTea House | All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
