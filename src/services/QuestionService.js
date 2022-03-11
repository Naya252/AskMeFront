import axios from 'axios';

const url = 'https://naya252.github.io/data/askme/db.json';

class QuestionService {
  //Get Questions
  static getQuestions() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data.reverse();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //Get Question by Id
  static getQuestionById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create Question
  static insertQuestion(data) {
    return axios.post(url, {
      text: data.text,
      createdAt: new Date(),
      answerAt: '',
      comment: '',
      status: 0,
      likes: 0,
      dislikes: 0,
      title: data.title,
      name: data.name,
      views: 0,
    });
  }

  //Change Like
  static changeLike(data) {
    return axios.put(`${url}${data.id}`, data);
  }

  //Change Dislike
  static changeDislike(data) {
    return axios.put(`${url}${data.id}`, data);
  }

  //Add view
  static addView(data) {
    return axios.put(`${url}${data.id}`, data);
  }

  //Delete Question
  static deleteQuestion(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default QuestionService;
