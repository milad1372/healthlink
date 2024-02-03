import Head from "next/head";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaLungs, FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import Header from "~/components/common/HeaderSessionAuto";
import QuestionIcon from "~/components/common/QuestionIcon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/common/shadcn/Drawer";
import { api } from "~/utils/api";

const sections = [
  {
    image: FaLungs,
    text: "Breathing",
  },
  {
    image: FaHeart,
    text: "Heart",
  },
  {
    text: "Mental Health",
    image: GiBrain,
  },
  {
    text: "Eye care",
    image: FaEye,
  },
];

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      {/* <Header /> */}
      <main className="from-primaryBase to-primaryBase/90 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {/* <b className="animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-transparent"> */}
            Health Link
            {/* </b> */}
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {sections.map((item) => {
              const Icon = item.image;
              return (
                <div className="relative">
                  <Drawer>
                    <DrawerTrigger>
                      <span
                        className="absolute z-10 inline-block align-bottom"
                        title="See about this"
                      >
                        <QuestionIcon />
                      </span>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mb-20 flex w-full items-center justify-center">
                        <DrawerHeader>
                          <DrawerTitle className="capitalize">
                            {item.text}
                          </DrawerTitle>
                          <DrawerDescription>
                            {"This is something about " + `${item.text}`}
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          {/* <Button>Submit</Button>
                            <DrawerClose>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose> */}
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>

                  <Link
                    className="flex h-full max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                    href={`/user/${item.text}`}
                    // target="_blank"
                    key={item.text}
                  >
                    <Icon size={"50%"} />
                    <h3 className="text-center text-2xl font-bold">
                      {item.text}
                    </h3>
                    {/* <div className="text-lg">
                    Just the basics - Everything you need to know to set up your
                    database and authentication.
                  </div> */}
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <p className="text-2xl text-white">kk</p> */}
        </div>
      </main>
    </>
  );
}
