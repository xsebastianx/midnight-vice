const mongoose = require("mongoose");
​
const truckSchema = new mongoose.Schema({
   name: "World Famous House of Mac",
   address: "2055 NW 2nd Ave, Miami, FL 33127",
   hours: {
      Mon: "12PM-11PM",
      Tue: "12PM-11PM",
      Wed: "12PM-11PM",
      Thu: "12PM-11PM",
      Fri: "12PM-2AM",
      Sat: "12PM-2AM",
      Sun: "12PM-12AM"
   },
   phoneNumber: "(786) 636-6967",
   website: "https://www.houseofmac.com/",
   image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/21373/5bb53820-b8a4-4db8-abc6-261946204482.jpg",
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }
},
{
    name: "Ms. Cheezious",
   address: "7418 Biscayne Blvd, Miami, FL 33138",
   hours: {
      Mon: "11AM-11PM",
      Tue: "11AM-11PM",
      Wed: "11AM-11PM",
      Thu: "11AM-11PM",
      Fri: "11AM-11PM",
      Sat: "11AM-11PM",
      Sun: "11AM-11PM"
   },
   phoneNumber: "(305) 989-4019",
   website: "https://www.mscheezious.com/",
   image: "https://pbs.twimg.com/profile_images/668633221949706240/lAooI_O3.jpg",
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }

},
{
    name: "Zona Grill Venezuelan Food",
   address: "3026 N Miami Ave, Miami, FL 33127",
   hours: {
      Mon: "6PM-12AM",
      Tue: "6PM-12AM",
      Wed: "8PM-12AM",
      Thu: "6PM-12AM",
      Fri: "6PM-3AM",
      Sat: "6PM-3AM",
      Sun: "Closed"
   },
   phoneNumber: "(786) 930-9930",
   website: String,
   image: "https://s3-media0.fl.yelpcdn.com/bphoto/7wlxhCMbBCd1KulrqX7g5A/l.jpg",
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }
    
},
{
    name: "Caja Caliente",
   address: "2634 NE 2nd Ave, Miami, FL 33137",
   hours: {
      Mon: "11AM-11PM",
      Tue: "11AM-11PM",
      Wed: "11AM-11PM",
      Thu: "11AM-11PM",
      Fri: "11AM-1AM",
      Sat: "11AM-1AM",
      Sun: "12PM-11PM"
   },
   phoneNumber: "(786) 398-5137",
   website: "http://caja-caliente.com/",
   image: "https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/cover/200967_1504192071.jpg",
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }
},
{
    name: "Orale Pana Food Truck",
   address: "2805 NE 2nd Ave, Miami, FL 33137",
   hours: {
      Mon: "7:30PM-1:30AM",
      Tue: "7:30PM-1:30AM",
      Wed: "7:30PM-1:30AM",
      Thu: "7:30PM-1:30AM",
      Fri: "7:30PM-4:30AM",
      Sat: "7:30PM-4:30AM",
      Sun: "7:30PM-1:30AM"
   },
   phoneNumber: "(786) 585-1034",
   website: String,
   image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/20858/5b8eb9a8-f6c4-4f9f-8030-51d346204482.png",
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }
});


​
module.exports = mongoose.model("Truck", truckSchema);