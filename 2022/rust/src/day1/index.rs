use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day1.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<Vec<i32>> {
    return input
        .split("\n\n")
        .map(|x| x.split("\n").collect::<Vec<&str>>())
        .map(|x| x.iter().map(|y| y.parse().unwrap()).collect::<Vec<i32>>())
        .collect::<Vec<Vec<i32>>>();
}

fn solve_part_1(input: Vec<Vec<i32>>) -> i32 {
    return input
        .iter()
        .map(|x| x.iter().sum())
        .collect::<Vec<i32>>()
        .iter()
        .copied()
        .max()
        .unwrap();
}

pub fn run() -> (i32, i32) {
    let input = read_input();

    let parsed_input = parse_input(input);

    return (solve_part_1(parsed_input), 0);
}
