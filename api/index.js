import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const bio = {
    data: ["Nama Panggilan",
        ":",
        "Ali"],
    lahir: ["Tempat,Tanggal Lahir", ":", "Bogor,26-12-2002"],
    angktan: ["Nama Angkatan",
        ":",
        "20 (INTEGER)",
    ],
    jk: ["Jenis Kelamin",
        ":",
        "Laki-laki",
    ],
    alamat: ["Alamat",
        ":",
        "Bandung",

    ]
};
app.get("/api/cara-biasa/get", (_req, res) => {
    res.send(bio);
})

app.listen(3000);
