const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb+srv://bhawarram2000:ramram@cluster0.elhjlot.mongodb.net/?retryWrites=true&w=majority');
    } catch (error) {
        console.log(error);
    }
}

main().then().catch((e) => console.log(e))