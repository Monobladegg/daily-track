const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }
});

const RoutineSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }
});

const DaySchema = new mongoose.Schema({
  tasks: {
    type: [TaskSchema],
    default: []
  },
  routine: {
    type: [RoutineSchema],
    default: []
  },
  appraisal: {
    type: Number,
    required: true,
  },
  impression: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }
});

const MonthSchema = new mongoose.Schema({
  days: {
    type: Map,
    of: DaySchema,
    default: {}
  }
}, { _id: false });

const YearSchema = new mongoose.Schema({
  months: {
    type: Map,
    of: MonthSchema,
    default: {}
  }
}, { _id: false });

const DashboardSchema = new mongoose.Schema({
  years: {
    type: Map,
    of: YearSchema,
    default: {}
  }
}, { _id: false });

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
  },
  dashboard: {
    type: DashboardSchema,
    default: {},
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
