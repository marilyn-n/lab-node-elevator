![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# DE | The Elevator

## Learning Goals

After this learning unit, you will be able to:

- Build your own elevator using node asynchrony concepts
- Create as many elevator requests as you want and save them in a queue
- Create callback functions to respond asynchronously to the orders received
- Original idea: http://play.elevatorsaga.com/

![Crazy giphy](https://media.giphy.com/media/P8XjmO1TTX3Nu/giphy.gif)

## Introduction

Elevators are a common device in real-life that requires asynchrony. In this Lab, we are going to create an elevator able to respond to different asynchronous requests.

The elevator will have a queue where it's going to store all the requests in the order they are made. Then, the elevator will move up or down depending on the next floor requested. Once it arrives to the actual requested floor, it will go the next one until there are no more requests in the queue.

### Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables
In your starter code folder you will find every file you need to finish the game. Push every file needed to make your game work properly.

## Exercise

### Iteration 1

In the `starter_code` we have three files:

1. `elevator.js`
  - For the logic of the elevator: accepting requests, moving up or down, etc.
1. `person.js`
  - For a person class with a name, the starting floor and the requested floor.
1. `index.js`
  - Main file that uses these classes. Remember to require the other files in this file.

Most of the functions we need to create will be in `elevator.js`, so let's begin there.

#### The *Elevator* class

First, the elevator needs methods to move. We will take care of what triggers the movement later.

In order to make it move, it will need a direction and a current position (floor). Let's focus on four main methods:

- The `update` function should (for now) display the current status of the elevator by calling the `log` function.
- The `log` function should just print the information related with position and direction:
```
Direction: up | Floor: 0
```
- The `start` function should start a `setInterval` which calls the `update` function every second
- The `stop` function should stop the elevator's `setInterval` listening for requests


These last two functions are key to the exercise.

Remember to use JavaScript functions such as [setTimeout()](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args) to create the listener


### Iteration 2

In the second iteration, the elevator should move up and down depending on its direction and the future passengers' requests.

Write the code for the `floorUp` function to update the current floor by incrementing it by one. So, if the current floor was 0, it will become 1. If it's 3, it should become 4.

Then, write the code for `floorUp`'s sister function, `floorDown`. It should update the current floor by subtracting one from the current floor. So, if the current floor was 6, it will become 5.

> Remember to consider the limits of the elevator so it doesn't go higher than the top floor or below the ground floor.

**Test the elevator.** Make it go to the top floor and the ground floor by using `floorUp` and `floorDown`. Display its status in the console with the `log` method.

Test what happens when you go past the top floor and below the ground floor.


### Iteration 3

Elevators pick up and drop off passengers, so we will have to represent those passengers in our program. Let’s use our class `Person` to describe passengers.

#### The *Person* class

A person should have three attributes:
- A `name`
- A `originFloor`: the floor they are in when they call the elevator
- A `destinationFloor`: the floor they intend to go to

Now, we need to think about what happens when a person ‘calls’ the elevator. In the `Elevator` class, it's time to write the code for the `call` method. This method should receive a person object and add it as a request into the elevator’s queue.

> Add the whole person object to the requests array. The elevator will need all that information later.

In later iterations, the elevator will process the list of requests as it travels up and down. We will need a list of floors that the elevator should serve in the `update` method.


### Iteration 4

When elevators travel up and down, it has to pick up people so that they can enter the elevator.

To keep a track of everyone, you will have three different lists:

- `waitingList`: people waiting for the elevator -they made the request and they're waiting the elevator to come
- `passengers`: people currently in the elevator
- `requests`: a list of pending requests. Floors where the elevator must stop.


#### The Waiting List

When a person calls the elevator (the `call` function is executed), we will add that person into the `waitingList` array. Notice they're not in the `passengers` collection because they're not yet in the elevator.

Also, add the (`originFloor`) to the `requests` array to let the elevator know where it has to stop to pick the passenger up.

#### A passenger enters the elevator

When the elevator arrives to any floor, it should check the `waitingList` array to verify if a person is waiting there. If this condition occurs:

- add the person into the `passengers` array
- delete the passenger from the `waitingList`
- Add the destination floor of the passenger to the elevator `requests`

We will show a message to indicate what just happens:

`Julia has enter the elevator`

#### A passenger leaves the elevator

When the elevator arrives to a floor, it should check the `passengers` collection. If a passenger's `destinationFloor` matches the current floor:

- we will delete that person from the `passengers` array.

We will show a message to indicate what just happens:

`Julia has left the elevator`


**Good luck!**


![Giphy IMAGE](https://media.giphy.com/media/l0MYIyrdQeWyEtQm4/giphy.gif)

## Extra resources

- [The Elevator Saga](http://play.elevatorsaga.com/)
- [Codepen](http://codepen.io/brigham/pen/AErDk) - Ok, we're in the backend, right? But this is a pretty simulation :stuck_out_tongue_closed_eyes:
