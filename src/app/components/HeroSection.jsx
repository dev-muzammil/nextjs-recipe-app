'use client'
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <ReactTyped strings={["Craving something delicious? We've got you covered!"]} typeSpeed={40} />
            </h1>
            <p className="mb-8 leading-relaxed">
              Craving something delicious? Look no further! Our recipe app is
              your go-to kitchen companion. From quick and easy weeknight
              dinners to indulgent weekend feasts, we&apos;ve got recipes to satisfy
              every craving. With thousands of options to choose from, you&apos;ll
              never get bored in the kitchen. Let&apos;s get cooking and create
              culinary magic together!
            </p>
            <div className="flex justify-center">
              <Link href={`/recipe-list`}>
                <Button gradientDuoTone='purpleToPink' outline>
                  Explore Recipes
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="heroimage.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
