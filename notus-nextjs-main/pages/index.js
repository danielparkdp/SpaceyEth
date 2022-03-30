import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import { ethers } from 'ethers'

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Table from "components/Tables/Table.js";

export default function Index() {
  const [dataLeaderboard, setDataLeaderboard] = useState([]);

  function FormatPercentage(percentage){
    const p = parseFloat(percentage);
    return parseInt(p*10000)/100+"%";
  }

  function FormatDecimal(decimal){
    const p = parseInt(decimal*100);
    return p/100.0;
  }

  function FormatCount(count){
    const c = parseInt(count)
    if (c >= 1000){
      const c2decimal = FormatDecimal(c/1000.0);
      return c2decimal+"K";
    }
    return c;
  }

  function FormatData(result, name){
    result.data.name = name;
    result.data.stats.seven_day_volume = FormatDecimal(result.data.stats.seven_day_volume);
    result.data.stats.one_day_change = FormatPercentage(result.data.stats.one_day_change);
    result.data.stats.seven_day_change = FormatPercentage(result.data.stats.seven_day_change);
    result.data.stats.floor_price = FormatDecimal(result.data.stats.floor_price);
    result.data.stats.num_owners = FormatCount(result.data.stats.num_owners);
    result.data.stats.count = FormatCount(result.data.stats.count);
  }

  useEffect(() => {
    (async () => {
      //const result = await axios("https://api.opensea.io/api/v1/collection/decentraland/stats");
      //setDataLeaderboard([result.data.stats.seven_day_volume, result.data.stats.one_day_change, result.data.stats.seven_day_change, result.data.stats.floor_price, result.data.stats.num_owners, result.data.stats.count]);
      let resultDecentraland = await axios("https://api.opensea.io/api/v1/collection/decentraland/stats");
      FormatData(resultDecentraland, "Decentraland");
      let resultSandbox = await axios("https://api.opensea.io/api/v1/collection/sandbox/stats");
      FormatData(resultSandbox, "The Sandbox");
      let resultNFTWorlds = await axios("https://api.opensea.io/api/v1/collection/nft-worlds/stats");
      FormatData(resultNFTWorlds, "NFT Worlds");
      setDataLeaderboard([resultDecentraland.data, resultSandbox.data, resultNFTWorlds.data]);
    })();
  }, []);


  const columns = useMemo(
   () => [
     {
       Header: "Collection",

       accessor: "name",
     },
     {
       Header: "Volume",

       accessor: "stats.seven_day_volume",
     },
     {
       Header: "24h %",

       accessor: "stats.one_day_change",
     },
     {
       Header: "7d %",

       accessor: "stats.seven_day_change",
     },
     {
       Header: "Floor Price",

       accessor: "stats.floor_price",
     },
     {
       Header: "Owners",

       accessor: "stats.num_owners",
     },
     {
       Header: "Items",

       accessor: "stats.count",
     }
   ],
   []
 );

  // function FormatPercentage(percentage){
  //   const p = parseFloat(percentage);
  //   return parseInt(p*10000)/100+"%";
  // }
  //
  // function FormatDecimal(decimal){
  //   const p = parseInt(decimal*100);
  //   return p/100.0;
  // }

  // const theadData = ["Collection", "Volume", "24h %", "7d %", "Floor Price", "Owners", "Items"];
  //
  // const tbodyData = [
  //     {
  //         id: "1",
  //         items: ["Decentraland", dataLeaderboard[0], dataLeaderboard[1], dataLeaderboard[2], dataLeaderboard[3], dataLeaderboard[4], dataLeaderboard[5]],
  //         //items: ["Decentraland", FormatDecimal(dataLeaderboard[0]), FormatPercentage(dataLeaderboard[1]), FormatPercentage(dataLeaderboard[2]), FormatDecimal(dataLeaderboard[3]), dataLeaderboard[4], dataLeaderboard[5]],
  //     },
  //     {
  //         id: "2",
  //         items: ["The Sandbox", 10000],
  //         //items: ["The Sandbox", FormatDecimal(dataLeaderboard[0]), FormatPercentage(dataLeaderboard[1]), FormatPercentage(dataLeaderboard[2]), FormatDecimal(dataLeaderboard[3]), dataLeaderboard[4], dataLeaderboard[5]],
  //     },
  //     {
  //         id: "3",
  //         items: ["NFT Worlds", "564", "-5.32%", "10.2", "10.0K"],
  //     },
  // ];

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-60">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4bdd6d0-5b28-4555-b733-2c23a7a9eb4c_750x480.jpeg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Find your virtual home
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              <div className="lg:pt-16 pt-6 w-full md:w-3/10 ml-auto px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-md">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Buy Land</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-16 pt-6 w-full md:w-3/10 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-md">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Sell Land</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-16 pt-6 w-full md:w-3/10 mr-auto px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-md">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Rent Land (Coming Soon!)</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-8/9 px-4 mr-auto ml-auto">

                <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
                  Top collections over last 7 days
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-center">
                  The most popular NFT worlds ranked by volume.
                </p>

                <div>
                    <Table columns={columns} data={dataLeaderboard} />
                </div>

              </div>

            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
