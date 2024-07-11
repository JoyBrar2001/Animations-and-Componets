"use client";

import { useState } from "react";
import { motion, useDragControls, useMotionValue, useAnimate } from "framer-motion";
import useMeasure from "react-use-measure";

export const DragCloseDrawerContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid h-screen place-content-center bg-neutral-950">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Open Drawer
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Darg the handle at the top of this modal downwards 100px to close it.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quod perferendis, neque perspiciatis provident, amet possimus nisi in incidunt cum ipsam asperiores accusamus ullam unde! Eveniet dignissimos ipsam numquam ut recusandae sed praesentium a beatae sequi quos temporibus error eligendi eaque sapiente voluptatum, ipsa at? Vero qui at libero culpa.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
}

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const controls = useDragControls();
  const y = useMotionValue(0);
  const [drawerRef, { height }] = useMeasure();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  }

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          ref={scope}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            style={{ y }}
            transition={{ ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => controls.start(e)}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>

            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}