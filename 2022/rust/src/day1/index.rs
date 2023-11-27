use std::fs;

pub fn run() {
    println!("day1 Hello, world!");

    let contents = fs::read_to_string("src/../../inputs/day1.txt")
        .expect("Something went wrong reading the file");

    println!("contents: {:?}", contents);
}