export default async function(error, req,res, next) {
    console.log(error);
    return res.status(500).json({mensage: "Error was founded"})
}