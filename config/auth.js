const db = require('../models');
const jwt = require('jsonwebtoken');


// function hexdec (hexString) {
//   hexString = (hexString + '').replace(/[^a-f0-9]/gi, '')
//   return parseInt(hexString, 16)
// };

// function bin2hex (s) {
  
//   var i
//   var l
//   var o = ''
//   var n
//   s += ''
//   for (i = 0, l = s.length; i < l; i++) {
//     n = s.charCodeAt(i)
//       .toString(16)
//     o += n.length < 2 ? '0' + n : n
//   }
//   return o
// };


// function crypto_rand_secure($min, $max)
// {
//     var $range = $max - $min;
//     if ($range < 1) return $min; // not so random...
//     var $log = Math.ceil(Math.log($range, 2));
//     var $bytes = parseInt($log / 8) + 1; // length in bytes
//     var $bits = parseInt($log) + 1; // length in bits
//     var $filter = parseInt(1 << $bits) - 1; // set all lower bits to 1
//     do {
//         var $rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
//         var $rnd = $rnd & $filter; // discard irrelevant bits
//     } while ($rnd > $range);
//     return $min + $rnd;
// }

// function getToken($length)
// {
//     var $token = "";
//     var $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     $codeAlphabet += "abcdefghijklmnopqrstuvwxyz";
//     $codeAlphabet += "0123456789";
//     var $max = $codeAlphabet.length; // edited

//     for (var $i=0; $i < $length; $i++) {
//         $token += $codeAlphabet[crypto_rand_secure(0, $max-1)];
//     }

//     return $token;
// }
// getToken(20)

module.exports = {
  logUserIn: function (email, password) {
    return new Promise((resolve, reject) => {
      db.User.findOne({
        email: email
      }).then(user => {
        user.verifyPassword(password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.sign({ id: user._id, email: user.email }, process.env.SERVER_SECRET, { expiresIn: 129600 }); // Sigining the token
            resolve({ success: true, message: "Token Issued!", token: token, user: user });
          } else {
            reject({ success: false, message: "Authentication failed. Wrong password." });
          }
        });
      }).catch(err => reject({ success: false, message: "User not found", error: err }));
    })
  }
}