import { isValidNip } from ".";

export const nips = [
  "9165459461",
  "3944610891",
  "4485962302",
  "9185386831",
  "1662131345",
  "6184801172",
  "7722030043",
  "9562444787",
  "3446570454",
  "7448366458",
  "5242518536",
  "6066048718",
  "3728793171",
  "7896524290",
  "3791534566",
  "1239991108",
  "6490788894",
  "9524391787",
  "3434582894",
  "3716006960",
  "3874343604",
  "3837537142",
  "8647937473",
  "6149380616",
  "2250880948",
  "1119813284",
  "9852651276",
  "3872590528",
  "1215693285",
  "6493886309",
  "4720607005",
  "6739578532",
  "9126005282",
  "8441544035",
  "9139579826",
  "1064455256",
  "5310565555",
  "7556927020",
  "8862395124",
  "8877871393",
  "6029626115",
  "2647419841",
  "2151472100",
  "2953363931",
  "5532690597",
  "5817402612",
  "4628411064",
  "8892434076",
  "2795193110",
  "4992449951",
];

export const invalidNips = [
  1,
  null,
  "",
  "111111111a",
  "1064455251",
  "1119813283",
  "1215693255",
  "1236491108",
  "1613231345",
  "2151472104",
  "2250880941",
  "2647419843",
  "2795193114",
  "2953363935",
  "3434582892",
  "3464270454",
  "3716006965",
  "3727693171",
  "3792334566",
  "3837537146",
  "3872590328",
  "3874343601",
  "3945310891",
  "44874562302",
  "4628411062",
  "4720607225",
  "4992249952",
  "5242218536",
  "5310565551",
  "5532690596",
  "5817402617",
  "6029626111",
  "6066548718",
  "6149380619",
  "6165801172",
  "6490788895",
  "6493886259",
  "6939578762",
  "7443266458",
  "7556927021",
  "77435030043",
  "7898724290",
  "8441544031",
  "8647937478",
  "8862395121",
  "8877871391",
  "8892434073",
  "9126005232",
  "9139579821",
  "9163259461",
  "91856831",
  "9524391783",
  "9532444787",
  "9852651274",
];

test("valid nips", () => {
  expect(nips.every((nip) => isValidNip(nip))).toBe(true);
});

test("invalid nips", () => {
  expect(invalidNips.every((nip) => !isValidNip(nip))).toBe(true);
});