use regex::Regex;
use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day2.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<String> {
    return input
        .split("\n")
        .map(|x| {
            let origin = x.to_string();

            let split = x.split(":").collect::<Vec<&str>>();

            let game_id = split[0].split(" ").collect::<Vec<&str>>()[1]
                .parse::<i32>()
                .unwrap();

            let game_description = split[1]
                .split(";")
                .map(|x| {
                    // let red_number = match Regex::new(r"red").unwrap().find(x) {
                    //     Some(matched) => &x
                    //         .chars()
                    //         .nth(matched.start() - 1)
                    //         .unwrap()
                    //         .to_string()
                    //         .parse::<usize>(),
                    //     None => 0,
                    // };

                    // println!("red_number: {:?}", red_number);

                    // let green_number = match Regex::new(r"green").unwrap().find(x) {
                    //     Some(matched) => &x
                    //         .chars()
                    //         .nth(matched.start() - 2)
                    //         .unwrap()
                    //         .to_string()
                    //         .parse::<usize>()
                    //     None => 0,
                    // };
                    // println!("green_number: {:?}", green_number);

                    // let blue_number = match Regex::new(r"blue").unwrap().find(x) {
                    //     Some(matched) => &x
                    //         .chars()
                    //         .nth(matched.start() - 2)
                    //         .unwrap()
                    //         .to_string()
                    //         .parse::<usize>()
                    //     None => 0,
                    // };
                    // println!("blue_number: {:?}", blue_number);

                    return 1;
                })
                .collect::<Vec<_>>();

            println!("game_id: {:?}", game_id);
            println!("game_description: {:?}", game_description);

            return origin;
        })
        .collect::<Vec<String>>();
}

// fn solve_part_1() {}
// fn solve_part_2() {}

pub fn run() -> (i32, i32) {
    let input = read_input();

    let parsed_input = parse_input(input);

    // println!("{:?}", parsed_input);

    return (111, 222);
}
