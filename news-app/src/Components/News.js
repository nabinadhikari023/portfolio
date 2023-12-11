import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    //console.log(this.state.page);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchNextData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    //console.log(this.state.page);
    //console.log(this.state.articles.length);
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea34658d82ca4d9a8c6e14996f8f1955&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.state.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=ea34658d82ca4d9a8c6e14996f8f1955&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     articles: parsedData.articles,
    //   });
    //}

    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
    // console.log(this.state.page)
    // console.log(this.state.totalResults)
    //console.log(pageSize)
  };

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=ea34658d82ca4d9a8c6e14996f8f1955&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    // });

    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    let { mode } = this.props;
    return (
      <>
        <h2
          className={`text-center text-${mode === "light" ? "dark" : "light"}`}
        >
          NewsSansar - Top Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchNextData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading ? <Spinner /> : ""}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 90) : ""}
                      date={element.publishedAt}
                      description={
                        element.description
                          ? element.description.slice(0, 45)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fEKET4cU2u4xBITN2u3KeMpS6zXA89khkg&usqp=CAU"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
