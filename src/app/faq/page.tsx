import Image from "next/image";
import { Search } from "lucide-react";
import FaqDrop from "@/components/FAQ/FaqDrop";


const content =[
  {
    title:'Introduction',
    sub:[
      {
        q:'What is eSIM?',
        ans:'An eSIM profile contains carrier and network subscription information, just like a normal SIM card. However, instead of coming in the form of a physical chip, the operator profile information is downloaded directly into the eSIM chip in your phone.This means your phone has to support eSIM if you want to use it. '
      },
      {
        q:'What is QR Code?',
        ans:'A QR code is simply a representation of a download link plus activation code for your eSIM profile. It is used to easily connect to the eSIM server and download the eSIM profile to your phone. It is easier to scan a QR code than typing a long string of text, but if for some reason you are unable to scan the QR code, you will have the option to activate your eSIM by entering the required information manually.Please note that QR codes can be used only once. Once a QR code is scanned and an eSIM profile is downloaded, it cannot be used to download the same eSIM again, whether it is on the same or another device.'
      },
      {
        q:'Is my phone eSim capable?',
        ans:`As the eSIM technology advances, it becomes more prominent and you can find many phone models supporting it. We tried to summarize it and compile a single list that contains most phone models.

The sure way you can verify if your phone is compatible:

iPhone: 

Go to Settings -> Cellular (or Mobile Data).

If you see ‘Add Cellular Plan’ or ‘Add Mobile Plan’, the phone supports eSIM

Samsung: 

Go to Settings -> Connections -> SIM Card Manager.

If you see ‘Add Mobile Plan’, the phone supports eSIM

Google Pixel: 

Go Settings -> Networks & Internet -> SIMs -> ‘+Add more’.

If you are using Pixel 3/3a or a later model, it will be there and that means the phone supports eSIM.

list of compatible phones: 

iPhones introduced in Fall 2018 and later (iPhone XS/XR and all newer models)
iPads: 10.2, Air, Mini 2019, Pro 11, Pro 12.9
Google Pixel 3/3a and all the later models
Samsung phones like Galaxy S20 and others.
and many more.
See full list below.

IMPORTANT EXCEPTIONS
Some models have exceptions depending on models and markets. Operator-locked devices: If your device is locked to a specific carrier due to a contract, it needs to be unlocked first to be able to use the eSIMs sold on our platform.

iPhone: 
iPhone models produced for the Chinese market have 2 physical SIM card slots and do not support eSIM. If your iPhone can take 2 physical SIM cards you won't be able to use eSIM.
Samsung:

Samsung restricts eSIM capability by software in some markets and some model sub-variants. Always check for individual phones by going to Settings-> Connections -> SIM Card Manager. If you can see the 'Add Mobile Plan' tab in the eSIMs section, you can use eSIM.

Operator locked devices:
If your device is locked to a specific carrier due to a contract, it needs to be unlocked first to be able to use the eSIMs sold on our platform.
 
      Full List of supported phone models 
      Apple phones that support eSIM

        iPhone XS
        iPhone XS Max
        iPhone XR
        iPhone 11
        iPhone 11 Pro
        iPhone 11 Pro Max
        iPhone 12 mini (coming soon to US
        iPhone 12
        iPhone 12 Max
        iPhone 12 Max Pro
        iPhone 13 mini
        iPhone 13
        iPhone 13 Pro
        iPhone 13 Pro Max
        iPhone 14
        iPhone 14 Plus
        iPhone 14 Pro
        iPhone 14 Pro Max
        iPhone SE (2020)
        iPad Air (3rd Generation)
        iPad Pro (3rd Generation)
        iPad Mini (5th Generation)
        Google phones that support eSIM

        Google Pixel 3/XL
        Google Pixel 3a/XL
        Google Pixel 4/XL
        Google Pixel 4A 5G
        Google Pixel 2/XL
        Google Pixel 5
        Google Pixel 5a
        Google Pixel 6
        Google Pixel 6 Pro
        Samsung phones that support eSIM

        Samsung Galaxy Fold
        Samsung Galaxy S20
        Samsung Galaxy S20+
        Samsung Galaxy S20 Ultra
        Samsung Galaxy Z Flip
        Samsung Galaxy S21
        Samsung Galaxy S21+ 
        Samsung Galaxy S21+ Ultra 
        Samsung Galaxy Fold
        Samsung Galaxy Z Fold2
        Samsung Galaxy Z Fold3
        Samsung Note 20+`
      }
    ]
  },
  {
    title:'Introduction',
    sub:[
      {
        q:'What is eSIM?',
        ans:'An eSIM profile contains carrier and network subscription information, just like a normal SIM card. However, instead of coming in the form of a physical chip, the operator profile information is downloaded directly into the eSIM chip in your phone.This means your phone has to support eSIM if you want to use it. '
      },
      {
        q:'What is QR Code?',
        ans:'A QR code is simply a representation of a download link plus activation code for your eSIM profile. It is used to easily connect to the eSIM server and download the eSIM profile to your phone. It is easier to scan a QR code than typing a long string of text, but if for some reason you are unable to scan the QR code, you will have the option to activate your eSIM by entering the required information manually.Please note that QR codes can be used only once. Once a QR code is scanned and an eSIM profile is downloaded, it cannot be used to download the same eSIM again, whether it is on the same or another device.'
      },
      {
        q:'Is my phone eSim capable?',
        ans:`As the eSIM technology advances, it becomes more prominent and you can find many phone models supporting it. We tried to summarize it and compile a single list that contains most phone models.

The sure way you can verify if your phone is compatible:

iPhone: 

Go to Settings -> Cellular (or Mobile Data).

If you see ‘Add Cellular Plan’ or ‘Add Mobile Plan’, the phone supports eSIM

Samsung: 

Go to Settings -> Connections -> SIM Card Manager.

If you see ‘Add Mobile Plan’, the phone supports eSIM

Google Pixel: 

Go Settings -> Networks & Internet -> SIMs -> ‘+Add more’.

If you are using Pixel 3/3a or a later model, it will be there and that means the phone supports eSIM.

list of compatible phones: 

iPhones introduced in Fall 2018 and later (iPhone XS/XR and all newer models)
iPads: 10.2, Air, Mini 2019, Pro 11, Pro 12.9
Google Pixel 3/3a and all the later models
Samsung phones like Galaxy S20 and others.
and many more.
See full list below.

IMPORTANT EXCEPTIONS
Some models have exceptions depending on models and markets. Operator-locked devices: If your device is locked to a specific carrier due to a contract, it needs to be unlocked first to be able to use the eSIMs sold on our platform.

iPhone: 
iPhone models produced for the Chinese market have 2 physical SIM card slots and do not support eSIM. If your iPhone can take 2 physical SIM cards you won't be able to use eSIM.
Samsung:

Samsung restricts eSIM capability by software in some markets and some model sub-variants. Always check for individual phones by going to Settings-> Connections -> SIM Card Manager. If you can see the 'Add Mobile Plan' tab in the eSIMs section, you can use eSIM.

Operator locked devices:
If your device is locked to a specific carrier due to a contract, it needs to be unlocked first to be able to use the eSIMs sold on our platform.
 
      Full List of supported phone models 
      Apple phones that support eSIM

        iPhone XS
        iPhone XS Max
        iPhone XR
        iPhone 11
        iPhone 11 Pro
        iPhone 11 Pro Max
        iPhone 12 mini (coming soon to US
        iPhone 12
        iPhone 12 Max
        iPhone 12 Max Pro
        iPhone 13 mini
        iPhone 13
        iPhone 13 Pro
        iPhone 13 Pro Max
        iPhone 14
        iPhone 14 Plus
        iPhone 14 Pro
        iPhone 14 Pro Max
        iPhone SE (2020)
        iPad Air (3rd Generation)
        iPad Pro (3rd Generation)
        iPad Mini (5th Generation)
        Google phones that support eSIM

        Google Pixel 3/XL
        Google Pixel 3a/XL
        Google Pixel 4/XL
        Google Pixel 4A 5G
        Google Pixel 2/XL
        Google Pixel 5
        Google Pixel 5a
        Google Pixel 6
        Google Pixel 6 Pro
        Samsung phones that support eSIM

        Samsung Galaxy Fold
        Samsung Galaxy S20
        Samsung Galaxy S20+
        Samsung Galaxy S20 Ultra
        Samsung Galaxy Z Flip
        Samsung Galaxy S21
        Samsung Galaxy S21+ 
        Samsung Galaxy S21+ Ultra 
        Samsung Galaxy Fold
        Samsung Galaxy Z Fold2
        Samsung Galaxy Z Fold3
        Samsung Note 20+`
      }
    ]
  }
]

export default function Faq() {
  return (
    <div className="w-screen min-h-screen">
      <div className="bg-darkblue h-[12rem] flex flex-col justify-center items-center">
        <Image alt=""  height={100} width={100} src='/faq/lighthouse.svg'/>
        <h2 className="text-white font-semibold text-lg">Frequently Asked Questions</h2>
        <div className="w-[18rem] flex bg-white p-1 rounded-sm">
          <input className="w-full" placeholder="Search Our Knowledgebase..."/>
            <Search className="text-white bg-btnblue p-1 rounded-full" />
        </div>
      </div>
      <div className="lg:px-[10rem] px-[2rem] flex flex-col w-full items-center">
        {
          content.map((item,idx)=>(
            <FaqDrop key={idx} title={item.title} sub={item.sub}/>
          ))
        }
      </div>
    </div>
  );
}
