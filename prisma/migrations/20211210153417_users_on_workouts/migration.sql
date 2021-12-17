-- CreateTable
CREATE TABLE "UsersOnWorkouts" (
    "userId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,

    CONSTRAINT "UsersOnWorkouts_pkey" PRIMARY KEY ("userId","workoutId")
);

-- AddForeignKey
ALTER TABLE "UsersOnWorkouts" ADD CONSTRAINT "UsersOnWorkouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnWorkouts" ADD CONSTRAINT "UsersOnWorkouts_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
