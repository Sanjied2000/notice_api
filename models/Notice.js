const noticeSchema = new mongoose.Schema(
  {
    noticeTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      default: null,
    },
    employeeName: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: null,
    },
    noticeType: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    noticeBody: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["Published", "Draft", "Unpublished"],
      default: "Published",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);
