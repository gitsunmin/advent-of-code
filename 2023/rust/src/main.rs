#[path = "day1/index.rs"]
mod day1;

fn main() {
    println!("##########################################\n");
    println!("Starting 2023 Advent of Code Rust solutions");
    let (day1_part1, day1_part2) = day1::run();

    println!("------------------------------------------");
    println!("Day 1 | Part1 : {} | Part2 : {}", day1_part1, day1_part2);

    println!("\n##########################################");
}
