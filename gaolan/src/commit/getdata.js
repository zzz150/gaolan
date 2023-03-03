import axios from "axios";
const url = "http://hhc.zskjnm.com/"

const getdata = {
	cheng(data) {
		return new Promise((resolve, reject) => {
			axios({
				url: url+'census/Trade_main/getUseRate',
				methods: "get",
				params: data,
			}).then((res) => {
				return resolve(res)
			}).catch(error => {
				console.log(error)
			})
		})
	},
	config(token) { //首页标题/提示
			// console.log(data)
			return new Promise((resolve, reject) => {
				axios({
					url: 'http://jk.869363.com/index/common/config',
					method: "post",
					headers: { 'token': token },
				}).then((res) => {
					return resolve(res)
				}).catch(error => {
					console.log(error)
				})
			})
		},

}

export default getdata

