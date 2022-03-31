import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import { ethers } from 'ethers'

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Table from "components/Tables/Table.js";

export default function Index() {

  const AzukiAddress = "0xB74bf94049D2c01f8805B8b15Db0909168Cabf46"
  const buyNFT = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId'})
			console.log('Connected to chain:' + chainId)

			const rinkebyChainId = '0x4'

			if (chainId !== rinkebyChainId) {
				alert('You are not connected to the Rinkeby Testnet!')
				return
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Found account', accounts[0])
			let currAccount = accounts[0];
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

  const sellNFT = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId'})
			console.log('Connected to chain:' + chainId)

			const rinkebyChainId = '0x4'

			if (chainId !== rinkebyChainId) {
				alert('You are not connected to the Rinkeby Testnet!')
				return
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Found account', accounts[0])
			let currAccount = accounts[0];
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(AzukiAddress, Azuki.abi, signer)
      const transaction = await contract["safeTransferFrom(address,address,uint256)"](signer.getAddress(), StakeNFTAddress, tokenId)
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

  return (
    <>
      <Navbar transparent />
      <main>


        <section className="py-20 bg-blueGray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              <div className="lg:pt-16 pt-6 w-full md:w-3/10 ml-auto px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words hover:enlarge-50 hover:cursor-pointer bg-white w-full shadow-lg rounded-md"
                onClick={buyNFT}>
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
                <div className="relative flex flex-col min-w-0 break-words hover:enlarge-50 hover:cursor-pointer bg-white w-full shadow-lg rounded-md"
                onClick={sellNFT}>
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Sell Land</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep your user engaged by providing meaningful information.
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

          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
