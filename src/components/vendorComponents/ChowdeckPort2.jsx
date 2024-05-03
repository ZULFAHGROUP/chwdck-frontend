import React from 'react'
import chowFounder from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-14.svg'
import chowOwner from "../../assets/chowdeck/1698762681.jpg";

const ChowdeckPort2 = () => {
  return (
    <div>
      <div className="px-16 pb-28 ">
        <div className=" border-solid-9 outline border-black rounded-lg bg-white ">
          <span>
            <div className="flex border-black outline-none border-solid">
              <p className="bg-[#0C513F] p-6 box-border text-2xl text-white flex font-bold w-[500px]">
                <span src={chowFounder}></span>Founder's Story
              </p>
            </div>

            <div className="border-black outline-4 border-solid-5"></div>
            {/* <span className="text-right pl-40 w-[746px] ml-80">
              <p>
                I tested positive for COVID on the 31st of December, 2020. The
                result came in very late at night and I couldn’t travel home. I
                spent the entire January 1 looking for food vendors to deliver
                food to me but the available food delivery providers didn’t
                deliver during public holidays. I eventually found one after so
                many hours and ended up paying 4x the regular amount.
              </p>
              <p>
                During my 14- day isolation, I realised no one was really
                looking into the logistics problem with the care and attention I
                would have wished for. I started asking questions; most answers
                ended with “dispatch riders are not reliable”, then I made a lot
                of research and discovered delivery companies in countries like
                India made millions of deliveries daily. No one comes close
                locally and it didn’t make sense that at such a small scale, we
                Africans couldn’t figure it out.
              </p>
              <p>
                We initially approached the problem from a technical standpoint
                then realised the problem was more operations than tech and we
                needed to deconstruct operations before trying again. We went
                back to first principles to figure this out. We pulled funds
                from our pockets, got three bikes and riders - gave two of them
                to Korede Spaghetti and one of them to NiFries. We held meetings
                weekly with our riders and that gave us so much insight we
                needed.
              </p>
              <p>
                With a better understanding of what we believed the problem was,
                we knew our solution had to be efficient and easy to use. This
                was hard to pull as we struggled with iterations before settling
                with one. It was a lot harder building the product as we had to
                ensure equal dedication to all channels (riders, restaurants and
                customers).
              </p>
              <p>
                We pulled our tech force and built the first version of the app
                in 3 weeks and launched public beta in October. Since then, it’s
                been an interesting journey learning and building for our
                customers.
              </p>
            </span> */}

            <div className="mt-14 mx-14">
              <img src={chowOwner} height="450px" width="380px" />
            </div>

            <div>
              <h2 className="mx-32 mt-6 text-2xl font-normal">
                Babafemi Aluko
              </h2>
              <p className="mx-28 text-green-950 font-semibold tracking-[0.2em]">
                CEO / CO-FOUNDER
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChowdeckPort2