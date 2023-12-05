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

fn solve_part_1(input: &Vec<Vec<i32>>) -> i32 {
    input.iter().map(|x| x.iter().sum::<i32>()).max().unwrap()
}

fn solve_part_2(input: &Vec<Vec<i32>>) -> i32 {
    let mut sums: Vec<i32> = input.iter().map(|x| x.iter().sum()).collect();

    sums.sort_by(|a, b| b.cmp(a));

    sums.iter().take(3).sum()
}

pub fn run() -> (i32, i32) {
    let input = read_input();

    let parsed_input = parse_input(input);

    return (solve_part_1(&parsed_input), solve_part_2(&parsed_input));
}
