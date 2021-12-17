# boolean-uk-final-solo-project-server
Upstream for final solo projects

<!-- model User {
 id               Int                 @id @default(autoincrement())
 userName         String              @unique
 password         String
 firstName        String
 lastName         String
 role             String
 subscriptionId   Int?
 subscripton      Subscription?       @relation(fields: [subscriptionId], references: [id])
 workouts         UsersOnWorkouts[]
} -->

<!-- model Subscription {
  id              Int                 @id @default(autoincrement())
  name            String
  users           User[]
  workout         SubscriptionsOnWorkouts[]
}

model Workout {
  id              Int                 @id @default(autoincrement())
  date            DateTime
  description     String
  difficulty      String
  users           UsersOnWorkouts[]
  subscription    SubscriptionsOnWorkouts[]
}

model UsersOnWorkouts {
  user            User                 @relation(fields: [userId], references: [id])
  userId          Int
  workout         Workout              @relation(fields: [workoutId], references: [id])  
  workoutId       Int
}

model SubscriptionsOnWorkouts {
  subscription    Subscription         @relation(fields: [subscriptionId], references: [id])  
  subscriptionId  Int
  workout         Workout              @relation(fields: [workoutId], references: [id])  
  workoutId       Int

} -->
