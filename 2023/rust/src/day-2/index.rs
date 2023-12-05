use std::collections::HashSet;
use std::fs;

enum Color {
    Red,
    Blue,
    Green,
}

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day2.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<(i32, Vec<Vec<i32>>)> {
    fn find_color(string_vec: Vec<&str>, color: Color) -> i32 {
        let color_str = match color {
            Color::Red => "red",
            Color::Blue => "blue",
            Color::Green => "green",
        };

        match string_vec
            .iter()
            .position(|&r| r == format!("{},", color_str) || r == color_str)
        {
            Some(matched_index) => string_vec[matched_index - 1].parse::<i32>().unwrap(),
            None => 0,
        }
    }

    return input
        .split("\n")
        .map(|x| {
            let split = x.split(":").collect::<Vec<&str>>();

            let game_id = split[0].split(" ").collect::<Vec<&str>>()[1]
                .parse::<i32>()
                .unwrap();

            let game_description = split[1]
                .split(";")
                .map(|x| {
                    let splited_vec = x.trim().split(" ").collect::<Vec<&str>>().to_vec();

                    return vec![
                        find_color(splited_vec.clone(), Color::Red),
                        find_color(splited_vec.clone(), Color::Green),
                        find_color(splited_vec.clone(), Color::Blue),
                    ];
                })
                .collect::<Vec<_>>();

            return (game_id, game_description);
        })
        .collect::<Vec<_>>();
}

fn solve_part_1(input: Vec<(i32, Vec<Vec<i32>>)>) -> i32 {
    const MAX_RED_CNT: i32 = 12;
    const MAX_GREEN_CNT: i32 = 13;
    const MAX_BLUE_CNT: i32 = 14;

    let mut invalid_games_set = HashSet::new();

    input.iter().for_each(|x| {
        x.1.iter().for_each(|y| {
            if y[0] > MAX_RED_CNT || y[1] > MAX_GREEN_CNT || y[2] > MAX_BLUE_CNT {
                invalid_games_set.insert(x.0);
            }
        });
    });

    let total_value: i32 = input.iter().map(|x| x.0).sum::<i32>();
    let invalid_value: i32 = invalid_games_set.into_iter().sum();

    return total_value - invalid_value;
}
fn solve_part_2(input: Vec<(i32, Vec<Vec<i32>>)>) -> i32 {
    return input
        .iter()
        .map(|x| {
            let red_max = x.1.iter().map(|y| y[0]).max().unwrap();
            let green_max = x.1.iter().map(|y| y[1]).max().unwrap();
            let blue_max = x.1.iter().map(|y| y[2]).max().unwrap();

            return red_max * green_max * blue_max;
        })
        .sum::<i32>();
}

pub fn run() -> (i32, i32) {
    let input = read_input();
    let parsed_input = parse_input(input);
    let part_1_result = solve_part_1(parsed_input.clone());
    let part_2_result = solve_part_2(parsed_input.clone());

    return (part_1_result, part_2_result);
}
