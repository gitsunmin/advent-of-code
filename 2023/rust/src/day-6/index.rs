use regex::Regex;
use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day6.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<(i32, i32)> {
    let parsed_input_to_Vec = input
        .split("\n")
        .map(|x| {
            Regex::new(r"\d+")
                .unwrap()
                .find_iter(x)
                .map(|x| x.as_str().parse::<i32>().unwrap())
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();

    let time_vec = parsed_input_to_Vec.get(0).unwrap();
    let distance_vec = parsed_input_to_Vec.get(1).unwrap();

    let games = time_vec
        .iter()
        .enumerate()
        .map(|(i, x)| (x.clone(), distance_vec.get(i).unwrap().clone()))
        .collect::<Vec<_>>();

    return games;
}

// fn solve_part_1(input: Vec<Vec<Vec<i32>>>) -> i32 {}

// fn solve_part_2(input: Vec<Vec<Vec<i32>>>) -> i32 {}

pub fn run() -> (i32, i32) {
    let input = read_input();
    let parsed_input = parse_input(input);
    println!("parsed_input: {:?}", parsed_input);

    // let part_1_result = solve_part_1(parsed_input.clone());
    // let part_2_result = solve_part_2(parsed_input.clone());

    return (1, 2);
}
