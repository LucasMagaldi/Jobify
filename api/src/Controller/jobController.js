

class jobController {

    async CreateJob(req,res) {
        console.log('create')
        return res.status(200).json({msg: "Create Job"})
    }

    async GetAllJobs(req,res) {
        console.log('get All')
        return res.status(200).json({msg: "Get Jobs"})
    }

    async DeleteJob(req,res) {
        return res.status(200).json({msg: "Delete Job"})
    }

    async UpdateJob(req,res) {
        return res.status(200).json({msg: "Update Job"})
    }

    async ShowStats(req,res) {
        return res.status(200).json({msg: "Show Stats"})
    }

}


export default new jobController();