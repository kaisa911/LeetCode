var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const words = {};
  for (const word of positive_feedback) {
    words[word] = 3;
  }
  for (const word of negative_feedback) {
    words[word] = -1;
  }
  const A = [];
  for (let i = 0; i < report.length; i++) {
    let score = 0;
    for (const word of report[i].split(' ')) {
      score += words[word] || 0;
    }
    A.push([-score, student_id[i]]);
  }
  A.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
  return A.slice(0, k).map(([, i]) => i);
};
