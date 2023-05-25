"use strict";

const projectData = {
  project1: {
    goals: [
      {
        title: "Goal 1",
        details: "Trình bày đầy đủ thông tin cá nhân",
      },
      {
        title: "Goal 2",
        details: "Cập nhập liên tục kinh nghiệm, kỹ năng",
      },
    ],
    teams: [
      {
        number: "Member 1",
        name: "Vũ Thị Thu Trang",
      },
    ],
    scopeIns: [
      "Cung cấp nhà tuyển dụng kỹ năng phù hợp nội dung công việc",
      "Kinh nghiêm làm việc liên quan đến công việc",
    ],
    scopeOuts: [
      "Điểm yếu của bản thân",
      "Kinh nghiêm làm việc không liên quan đến công việc",
    ],
    primaries: ["Thông tin cá nhân", "Kinh nghiệm", "Kỹ năng"],

    timelines: [
      {
        number: "01",
        details: "Project Start",
        date: "10/5/2023",
      },
      {
        number: "02",
        details: "Layout ban đầu",
        date: "10/5-13/5/2023",
      },
      {
        number: "03",
        details: "Chỉnh sửa nội dung",
        date: "14/5-15/5/2023",
      },
      {
        number: "04",
        details: "Chỉnh sửa layout",
        date: "16/5-17/5/2023",
      },
      {
        number: "05",
        details: "Hoàn thiện dự án",
        date: "18/5/2023",
      },
    ],
  },
  project2: {
    goals: [
      {
        title: "Goal 1",
        details: "Quản lý thông tin về thú cưng",
      },
      {
        title: "Goal 2",
        details: "Quản lý lịch trình chăm sóc và tiêm phòng",
      },
      {
        title: "Goal 3",
        details: "Giao tiếp và chia sẻ thông tin",
      },
    ],
    teams: [
      {
        number: "Member 1",
        name: "Vũ Thị Thu Trang",
      },
    ],
    scopeIns: [
      "Quản lý thông tin về thú cưng",
      "Quản lý lịch trình chăm sóc thú cưng",
      "Quản lý chi phí và hoạt động cho thú cưng",
    ],
    scopeOuts: [
      "Kết nối với các dịch vụ để chăm sóc thú cưng",
      "Tính năng giao tiếp và cộng đồng cho các chủ thú cưng",
    ],
    primaries: [
      "Trang chủ: Liệt kê tất cả các thú cưng đã được đăng ký ",
      "Cập nhật thông tin thú cưng",
      "Đăng nhập và đăng ký",
    ],

    timelines: [
      {
        number: "01",
        details: "Project Start",
        date: "10/6/2023",
      },
      {
        number: "02",
        details: "Layout ban đầu",
        date: "10/6-13/6/2023",
      },
      {
        number: "03",
        details: "Chỉnh sửa nội dung",
        date: "14/6-15/6/2023",
      },
      {
        number: "04",
        details: "Chỉnh sửa layout",
        date: "16/6-20/6/2023",
      },
      {
        number: "05",
        details: "Hoàn thiện dự án",
        date: "20/6/2023",
      },
    ],
  },
  project3: {
    goals: [
      {
        title: "Goal 1",
        details:
          "cung cấp cho người đọc các thông tin mới nhất và chính xác nhất",
      },
      {
        title: "Goal 2",
        details: "cung cấp cho người đọc các nguồn thông tin tin cậy",
      },
    ],
    teams: [
      {
        number: "Member 1",
        name: "Vũ Thị Thu Trang",
      },
    ],
    scopeIns: ["Tin tức thể thao", "Tin tức giải trí"],
    scopeOuts: ["Các tin tức khác"],
    primaries: [
      "Trình bày các tin tức nổi bật hoặc quảng cáo ",
      "Nội dung, hình ảnh, video của tin tức",
      "Các tin tức liên quan",
    ],

    timelines: [
      {
        number: "01",
        details: "Project Start",
        date: "4/8/2023",
      },
      {
        number: "02",
        details: "Layout ban đầu",
        date: "4/8-13/8/2023",
      },
      {
        number: "03",
        details: "Chỉnh sửa nội dung",
        date: "14/8-20/8/2023",
      },
      {
        number: "04",
        details: "Chỉnh sửa layout",
        date: "22/8-25/8/2023",
      },
      {
        number: "05",
        details: "Hoàn thiện dự án",
        date: "26/8/2023",
      },
    ],
  },
};
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const projectId = urlParams.get("project-id");
console.log(projectId);

const project = projectData[projectId];

const goalEl = document.querySelector(".goal");
const goalWrapper = document.getElementById("goal-wrapper");

project.goals.forEach((goal) => {
  const newEl = goalEl.cloneNode(true);
  newEl.querySelector(".goal-title").innerHTML = goal.title;
  newEl.querySelector(".goal-details").innerHTML = goal.details;
  newEl.classList.remove("d-none");
  goalWrapper.append(newEl);
});

const teamEl = document.querySelector(".team");
const teamWrapper = document.getElementById("team-wrapper");

project.teams.forEach((team) => {
  const newEl = teamEl.cloneNode(true);
  newEl.querySelector(".team-member-no").innerHTML = team.number;
  newEl.querySelector(".team-member-name").innerHTML = team.name;
  newEl.classList.remove("d-none");
  teamWrapper.append(newEl);
});

const scopeInEl = document.querySelector(".scope-in");
const inWrapper = document.getElementById("in-wrapper");

project.scopeIns.forEach((inData) => {
  const newEl = scopeInEl.cloneNode(true);
  newEl.innerHTML = inData;
  newEl.classList.remove("d-none");
  inWrapper.append(newEl);
});

const scopeOutEl = document.querySelector(".scope-out");
const outWrapper = document.getElementById("out-wrapper");

project.scopeOuts.forEach((outData) => {
  const newEl = scopeOutEl.cloneNode(true);
  newEl.innerHTML = outData;
  newEl.classList.remove("d-none");
  outWrapper.append(newEl);
});

const primaryEl = document.querySelector(".primary");
const primaryWrapper = document.getElementById("primary-wrapper");

project.primaries.forEach((primaryData) => {
  const newEl = primaryEl.cloneNode(true);
  newEl.querySelector(".primary-data").innerHTML = primaryData;
  newEl.classList.remove("d-none");
  primaryWrapper.append(newEl);
});

const timelineEl = document.querySelector(".timeline");
const timelineWrapper = document.getElementById("timeline-wrapper");

project.timelines.forEach((timeline) => {
  const newEl = timelineEl.cloneNode(true);
  newEl.querySelector(".timeline-no").innerHTML = timeline.number;
  newEl.querySelector(".timeline-details").innerHTML = timeline.details;
  newEl.querySelector(".timeline-date").innerHTML = timeline.date;

  newEl.classList.remove("d-none");
  timelineWrapper.append(newEl);
});
