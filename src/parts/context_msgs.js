const message = (
	{
		task: {
			create:{
				ok:'Task succesfully created.',
				err:"Unable create to task.",
			},
			edit:{
				ok:'Task succesfully edited.',
				err:"Unable edit to task.",
			},
			delete:{
				ok:'Task succesfully deleted.',
				err:"Unable delete to task.",
			},
		},
		user: {
			create:{
				ok:'User succesfully created.',
				err:"Unable create to user.",
			},
			edit:{
				ok:'User succesfully edited.',
				err:"Unable edit to user.",
			},
			delete:{
				ok:'User succesfully deleted.',
				err:"Unable delete to user.",
			},
		}
	}
);
export default message;