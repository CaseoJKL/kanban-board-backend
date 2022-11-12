import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  id: String,
  boards: [
    {
      name: String,
      columns: [
        {
          name: String,
          tasks: [
            {
              title: String,
              description: String,
              status: String,
              subtasks: [
                {
                  title: String,
                  isCompleted: Boolean,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default mongoose.model("Board", BoardSchema);
